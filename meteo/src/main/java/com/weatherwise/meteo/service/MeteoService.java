package com.weatherwise.meteo.service;

import com.weatherwise.meteo.payload.WeatherMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
public class MeteoService {
    private final RestTemplate restTemplate;
    private final String appID;
    private final String appURL = "http://api.openweathermap.org/data/2.5/weather";

    public MeteoService(RestTemplateBuilder restTemplateBuilder, @Value("${open.weather.appid}") final String appId) {
        this.restTemplate = restTemplateBuilder.build();
        this.appID = appId;
    }

    @Cacheable(cacheNames = "weather", key = "#cityCountry")
    public WeatherMapper fetchWeatherByCity(String city) throws RestClientException {
        log.info("Sync : Looking up " + city);
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(appURL)
                .queryParam("q", city)
                .queryParam("appid", appID)
                .queryParam("units", "metric");
        return restTemplate.getForObject(builder.toUriString(), WeatherMapper.class);
    }



}
