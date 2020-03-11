package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Comment;
import com.example.Blog.Blog.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommentServiceImpl implements ICommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment getPost(Long id) {
        return this.commentRepository.findById(id).get();
    }

    @Override
    public Comment saveComment(Comment comment) {
        this.commentRepository.save(comment);
        return comment;
    }

    @Override
    public List<Comment> getAllByPostId(final Long id) {
        return (List<Comment>) this.commentRepository.findByPostId(id);

    }

    @Override
    public Comment update(Comment comment) {
        this.commentRepository.saveAndFlush(comment);
        return comment;
    }

    @Override
    public void deleteComment(final Long id) {
        this.commentRepository.deleteById( id);
    }
}