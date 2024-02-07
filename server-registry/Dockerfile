FROM eclipse-temurin:17-jdk
WORKDIR /weatherwise
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /weatherwise/service-registry.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","/weatherwise/service-registry.jar"]