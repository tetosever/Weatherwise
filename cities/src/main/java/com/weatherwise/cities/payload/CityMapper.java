package com.weatherwise.cities.payload;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"geonames"})
public class CityMapper {
        @JsonProperty("geonames")
        private List<GeoName> geonames;

        @JsonProperty("geonames")
        public List<GeoName> getGeonames() {
            return geonames;
        }
        @JsonProperty("geonames")
        public void setGeonames(List<GeoName> cities) {
            this.geonames = cities;
}
}

