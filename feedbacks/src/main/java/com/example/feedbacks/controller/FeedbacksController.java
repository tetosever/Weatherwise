package com.example.feedbacks.controller;

import com.example.feedbacks.model.Feedback;
import com.example.feedbacks.service.FeedbacksService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/feedbacks")
@Slf4j
public class FeedbacksController {
    @Autowired
    private FeedbacksService feedbacksService;

    @PostMapping("/")
    public void saveFeedback(@RequestBody Feedback feedback) {
        log.info("Inside saveFeedback of FeedbacksController");
        feedbacksService.saveFeedbacks(feedback);
    }

    @GetMapping("/citta/{city}")
    public  float retriveFeedbackByCity(@PathVariable("city") String city) {
        return feedbacksService.percentageLikeOfCity(city);
    }
    @GetMapping("/initdb")
    public String initDb(){
        Feedback feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(true);
        feedbacksService.saveFeedbacks(feedback);
        feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(true);
        feedbacksService.saveFeedbacks(feedback);
        feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(true);
        feedbacksService.saveFeedbacks(feedback);
        feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(true);
        feedbacksService.saveFeedbacks(feedback);
        feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(true);
        feedbacksService.saveFeedbacks(feedback);
        feedback = new Feedback();
        feedback.setCity("bergamo");
        feedback.setLike(false);
        feedbacksService.saveFeedbacks(feedback);
        return "DB Initialized";
    }

}
