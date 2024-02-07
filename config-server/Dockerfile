FROM eclipse-temurin:17-jdk
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/config-server.jar
EXPOSE 9296
ENTRYPOINT ["java","-jar","/weatherwise/config-server.jar"]
