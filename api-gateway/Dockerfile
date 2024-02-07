FROM eclipse-temurin:17-jdk
ARG JAR_FILE=target/*.jar
WORKDIR /weatherwise
COPY ${JAR_FILE} /weatherwise/api-gateway.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/weatherwise/api-gateway.jar"]
