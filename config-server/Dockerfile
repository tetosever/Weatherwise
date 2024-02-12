FROM eclipse-temurin:17-jdk
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/config-server.jar
EXPOSE 9296
ENTRYPOINT ["sh", "-c", "java -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} -jar /weatherwise/config-server.jar"]
