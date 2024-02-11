CREATE TABLE feedback (
                           feedback_id SERIAL PRIMARY KEY,
                           city VARCHAR(255) NOT NULL,
                           is_like INT NOT NULL
);
CREATE SEQUENCE feedback_seq START 1;

