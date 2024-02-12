FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/feedbacks.jar
EXPOSE 8082
ENTRYPOINT ["sh", "-c", "java -Dspring.profiles.active=${SPRING_PROFILES_ACTIVE} -jar /weatherwise/feedbacks.jar"]
