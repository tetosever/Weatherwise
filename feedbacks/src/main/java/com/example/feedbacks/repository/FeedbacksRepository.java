package com.example.feedbacks.repository;

import com.example.feedbacks.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbacksRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByCityIgnoreCase(String city);
    void updateFeedbacks(Feedback feedback);


}
