FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/meteo.jar
EXPOSE 8083
ENV SPRING_PROFILES_ACTIVE=default
ENTRYPOINT ["sh", "-c", "java -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} -jar /weatherwise/meteo.jar"]
