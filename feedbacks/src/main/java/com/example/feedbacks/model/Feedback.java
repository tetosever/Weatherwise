package com.example.feedbacks.model;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Data
@Getter
@Setter
public class Feedback {
    @Id
    @SequenceGenerator(name="feedback_SEQ", sequenceName="feedback_SEQ", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="feedback_SEQ")
    private Long feedbackId;
    private String city;
    private int isLike;
}
