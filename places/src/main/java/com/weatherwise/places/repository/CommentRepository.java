package com.weatherwise.places.repository;
import com.weatherwise.places.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    //save comment
    public Comment save(Comment comment);
    List<Comment> findCommentByCity(String city);
}
