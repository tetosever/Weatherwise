FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/cities.jar
EXPOSE 8081
ENTRYPOINT ["sh", "-c", "java -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} -jar /weatherwise/cities.jar"]
