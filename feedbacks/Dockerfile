FROM eclipse-temurin:17-jre
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/feedbacks.jar
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "/weatherwise/feedbacks.jar"]
