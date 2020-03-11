package com.example.Blog.Blog.repositories;

import com.example.Blog.Blog.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    @Modifying
    @Transactional
    @Query("update Post as p set p.ratingPoints = p.ratingPoints + ?1 where p.id =?2")
    int updateRating(Long rating,Long postId);

    @Query("from Post p order by p.created_at desc")
    List<Post> findAllSortedByDateReverse();}

