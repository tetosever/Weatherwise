package com.weatherwise.cities.controller;

import com.weatherwise.cities.payload.ApiResponse;
import com.weatherwise.cities.payload.CityMapper;
import com.weatherwise.cities.service.CitiesService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/cities")
public class CitiesController {

    private final CitiesService citiesService;

    public CitiesController(CitiesService citiesService) {
        this.citiesService = citiesService;
    }

    @CrossOrigin
    @RequestMapping(value = "/{prefix}", method = RequestMethod.GET)
    public ApiResponse getCitiesByPrefix(@PathVariable String prefix) {
        CityMapper cityMapper = citiesService.retriveCityBYPrefix(prefix);
        return new ApiResponse(HttpStatus.OK.value(), cityMapper);


    }
}

