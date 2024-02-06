package com.weatherwise.meteo.payload;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"name", "main", "weather"})
public class WeatherMapper {


    @JsonProperty("weather")
    private List<Weather> weather;

    @JsonProperty("main")
    private GroupWeather groupWeather;
    @JsonProperty("name")
    private String name;


    @JsonProperty("weather")
    public List<Weather> getWeather() {
        return weather;
    }

    @JsonProperty("weather")
    public void setWeather(List<Weather> weather) {
        this.weather = weather;
    }
    @JsonProperty("main")
    public GroupWeather getGroupWeather() {
        return groupWeather;
    }
    @JsonProperty("main")
    public void setGroupWeather(GroupWeather groupWeather) {
        this.groupWeather = groupWeather;
    }
    @JsonProperty("name")
    public String getName() {
        return name;
    }
    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }


}
