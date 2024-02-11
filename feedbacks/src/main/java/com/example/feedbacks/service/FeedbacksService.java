package com.example.feedbacks.service;

import com.example.feedbacks.model.Feedback;
import com.example.feedbacks.repository.FeedbacksRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.List;

@Service
@Slf4j
public class FeedbacksService {

    @Autowired
    private FeedbacksRepository feedbacksRepository;


    public Feedback saveFeedbacks(Feedback feedback) {
        log.info("Inside saveFeedback of FeedbacksService");
        return  feedbacksRepository.save(feedback);
    }
    public float percentageLikeOfCity(String city) {
        log.info("Inside findFeedbackByCity of FeedbacksController");
        List<Feedback> feedbacks = feedbacksRepository.findByCityIgnoreCase(city);
        int all = feedbacks.size();
        int likes = 0;
        for (Feedback feedback : feedbacks) {
           feedback.getIsLike();
            if (feedback.getIsLike() == 1) {
                likes++;
            }
        }

        return (((float) likes) * 100) / feedbacks.size();
    }

}
