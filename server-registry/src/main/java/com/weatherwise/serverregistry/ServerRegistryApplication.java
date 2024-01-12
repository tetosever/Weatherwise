package com.weatherwise.serverregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableEurekaServer
public class ServerRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerRegistryApplication.class, args);
	}

}
