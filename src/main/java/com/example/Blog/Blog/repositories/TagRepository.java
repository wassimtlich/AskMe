package com.example.Blog.Blog.repositories;
import com.example.Blog.Blog.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findByPostsId(final Long postId);
    Tag findTagByName(String name);
}