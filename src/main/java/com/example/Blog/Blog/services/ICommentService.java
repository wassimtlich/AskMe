package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Comment;

import java.util.List;

public interface ICommentService {

    public Comment saveComment(Comment comment);
    public List<Comment> getAllByPostId(final Long id) ;
    public void deleteComment(Long id);
    public Comment update(Comment comment) ;
    public Comment getPost(Long id);
}
