package com.weatherwise.apigateway.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/fallbacks")
public class FallBackController {

    @GetMapping("/meteo")
    public ResponseEntity<String> meteoFallBack(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Meteo Service is taking longer than Expected");
    }
    @GetMapping("/feedbacks")
    public ResponseEntity<String> feedbacksFallBack(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Feedbacks Service is taking longer than Expected");
    }
    @GetMapping("/cities")
    public ResponseEntity<String> citiesFallBack(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Cities Service is taking longer than Expected");
    }

    @GetMapping("/places")
    public ResponseEntity<String> placesFallBack(){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Places Service is taking longer than Expected");
    }
}
