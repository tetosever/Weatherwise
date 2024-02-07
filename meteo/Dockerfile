FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/meteo.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/weatherwise/meteo/meteo.jar"]
