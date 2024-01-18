package com.weatherwise.apigateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RouteConfiguration {
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder)
    {
        return builder.routes().build();
    }
    @Bean
    public RouteLocator routesCircuitBreaker(RouteLocatorBuilder builder)
    {
        return builder.routes()
                .route(p -> p.path("/meteo/**")
                        .filters(f->f.circuitBreaker(config->config
                                .setName("meteoCircuitBreaker")
                                .setFallbackUri("forward:/fallbacks/meteo")))
                        .uri("lb://meteo"))

                .route(p -> p.path("/feedbacks/**")
                        .filters(f->f.circuitBreaker(config->config
                                .setName("feedbacksCircuitBreaker")
                                .setFallbackUri("forward:/fallbacks/feedbacks")))
                        .uri("lb://feedbacks"))

                .route(p -> p.path("/places/**")
                        .filters(f->f.circuitBreaker(config->config
                                .setName("placesCircuitBreaker")
                                .setFallbackUri("forward:/fallbacks/places")))
                        .uri("lb://places"))

                .route(p -> p.path("/cities/**")
                        .filters(f->f.circuitBreaker(config->config
                                .setName("citiesCircuitBreaker")
                                .setFallbackUri("forward:/fallbacks/cities")))
                        .uri("lb://cities"))

                .route(p -> p.path("/eureka/web")
                        .filters(f->f.setPath("/"))
                        .uri("http://localhost:8761"))

                .route(p -> p.path("/eureka/**")
                        .uri("http://localhost:8761"))

                .build();
    }
}