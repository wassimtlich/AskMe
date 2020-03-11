package com.example.Blog.Blog.repositories;

import com.example.Blog.Blog.entities.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Comment, Long> {
}