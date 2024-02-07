package com.weatherwise.places.controller;

import com.weatherwise.places.model.Comment;
import com.weatherwise.places.service.PlacesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/places")
@Slf4j
public class ControllerPlaces {
    @Autowired
    private PlacesService placesService;

    @PostMapping("/")
    public String saveComment(@RequestBody Comment comment) {
        log.info("Inside saveComment of PlacesController");
        placesService.saveComment(comment);
        return 200 + " OK";
    }

    @GetMapping("/citta/{city}")
    public List<Comment> findCommentByCity(@PathVariable("city") String city) {
        log.info("Inside findCommentByCity of PlacesController");
        return placesService.findCommentByCity(city);
    }
    @GetMapping("/initdb")
    public String initDb(){
        Comment comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Central Park");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Empire State Building");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Statue of Liberty");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Times Square");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Brooklyn Bridge");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Broadway");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Rockefeller Center");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("New York");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Museum of Modern Art");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("Bergamo");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Citta Alta");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("Bergamo");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Cappella Colleoni");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("Bergamo");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Basilica di Santa Maria Maggiore");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);
        comment = new Comment();
        comment.setCity("Bergamo");
        comment.setDescription("This is a great place to visit");
        comment.setPlaceName("Rocca di Bergamo");
        comment.setRating(5);
        comment.setUserName("John");
        placesService.saveComment(comment);

        return "Database initialized";
    }
}
