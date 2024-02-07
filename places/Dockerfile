FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/places.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "/weatherwise/places.jar"]