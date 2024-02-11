package com.weatherwise.cities.service;

import com.weatherwise.cities.payload.CityMapper;
import com.weatherwise.cities.payload.GeoName;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class CitiesService {
    private final RestTemplate restTemplate;

    private final String appURL = "http://api.geonames.org/searchJSON";

    public CitiesService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();

    }
    private List<GeoName> removeDuplicates(List<GeoName> geonames) {
        Set<String> seen = new HashSet<>();
        List<GeoName> result = new ArrayList<>();
        for (GeoName geoName : geonames) {
            String key = geoName.getName() + "_" + geoName.getCountryCode();
            if (!seen.contains(key)) {
                seen.add(key);
                result.add(geoName);
            }
        }
        return result;
    }


    public CityMapper retriveCityBYPrefix(String prefix) throws RestClientException {
        log.info("Sync : Looking up " + prefix);
        String url = "http://api.geonames.org/searchJSON" + "?name_startsWith=" + prefix + "&maxRows=10&username=" + "soldade12";

        return restTemplate.getForObject(url, CityMapper.class);
    }


}