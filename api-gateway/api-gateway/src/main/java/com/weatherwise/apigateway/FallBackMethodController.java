package com.weatherwise.apigateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FallBackMethodController {

    @GetMapping("/meteoFallBack")
    public String meteoFallBack(){
        return "Meteo Service is taking longer than Expected";
    }
    @GetMapping("/feedbacksFallBack")
    public String feedbakcsFallBack(){
        return "Feedbacks Service is taking longer than Expected";
    }
    @GetMapping("/citiesFallBack")
    public String citiesFallBack(){
        return "Cities Service is taking longer than Expected";
    }
    @GetMapping("/placesFallBack")
    public String placesFallBack(){
        return "Places Service is taking longer than Expected";
    }
}
