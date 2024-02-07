package com.weatherwise.places.service;
import com.weatherwise.places.model.Comment;
import com.weatherwise.places.repository.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PlacesService {
    @Autowired
    private CommentRepository commentRepository;

    public Comment saveComment(Comment comment) {

        return commentRepository.save(comment);
    }

    public List<Comment> findCommentByCity(String city) {
        log.info("Inside saveDepartment of DepartmentService");
        return commentRepository.findCommentByCity(city);
    }
}
