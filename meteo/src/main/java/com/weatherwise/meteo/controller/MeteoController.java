package com.weatherwise.meteo.controller;

import com.weatherwise.meteo.payload.ApiResponse;
import com.weatherwise.meteo.payload.WeatherMapper;
import com.weatherwise.meteo.service.MeteoService;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/meteo")
public class MeteoController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoController.class);
    private final MeteoService weatherService;

    public MeteoController(MeteoService weatherService) {
        this.weatherService = weatherService;
    }


    @RequestMapping(value = "/{city}", method = RequestMethod.GET)
    public ApiResponse weatherForCity(@PathVariable("city") String city) {
        WeatherMapper weather = weatherService.fetchWeatherByCity(city);
        return new ApiResponse(HttpStatus.OK.value(), weather);
    }


}
