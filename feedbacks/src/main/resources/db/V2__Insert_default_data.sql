
DO $$
    DECLARE

        cities TEXT[] := ARRAY['Milano', 'Roma', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna', 'Firenze', 'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova', 'Trieste', 'Taranto', 'Brescia', 'Prato', 'Parma', 'Modena', 'Reggio Calabria', 'Reggio Emilia', 'Perugia', 'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara', 'Sassari', 'Latina', 'Giugliano in Campania', 'Monza', 'Pescara', 'Bergamo', 'Forlì', 'Bolzano', 'Udine', 'Vicenza', 'Siracusa', 'Terni', 'Trento', 'Novara', 'Piacenza', 'Ancona', 'Lecce', 'Arezzo', 'Pesaro', 'Alessandria', 'New York City', 'Tokyo', 'Londra', 'Parigi', 'Los Angeles', 'Pechino', 'Chicago', 'Miami', 'Dubai', 'Mumbai']
        ;
        i INT := 0;
    BEGIN
        FOR i IN 1..10000 LOOP
                INSERT INTO feedback (feedback_id, city, is_like)
                SELECT nextval('feedback_SEQ'), city, (i % 2)::int
                FROM unnest(cities) AS city;
            END LOOP;
    END $$;