FROM eclipse-temurin:17-jdk
ARG JAR_FILE=target/*.jar
WORKDIR /weatherwise
COPY ${JAR_FILE} /weatherwise/api-gateway.jar
EXPOSE 8080
ENV SPRING_PROFILES_ACTIVE=default
ENTRYPOINT ["sh", "-c", "java -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} -jar /weatherwise/api-gateway.jar"]
