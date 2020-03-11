package com.example.Blog.Blog.repositories;

import com.example.Blog.Blog.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    Collection<Comment> findByPostId(final Long postId);
}