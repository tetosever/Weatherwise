package com.weatherwise.meteo.controller;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/meteo")
public class MeteoController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MeteoController.class);
    @GetMapping("/")
    public String prova() {
        return "Meteo by city";
    }
    @GetMapping("/ciao")
    public String ciao() {
        return "Meteo by city";
    }
}
