package com.example.Blog.Blog.controllers;

import com.example.Blog.Blog.dto.CommentDto;
import com.example.Blog.Blog.dto.CommentDtov2;
import com.example.Blog.Blog.services.CommentServiceImpl;
import com.example.Blog.Blog.util.CommentMapper;
import com.example.Blog.Blog.util.Commentv2Mapper;
import com.example.Blog.Blog.util.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentServiceImpl commentService;

    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private PostMapper postMapper;

    @Autowired
    private Commentv2Mapper commentv2Mapper;



    @PostMapping("/create")
    public CommentDtov2 createComment(@RequestBody CommentDtov2 commentDtov2) {

        return commentv2Mapper.toDto(this.commentService.saveComment(commentv2Mapper.toEntity(commentDtov2)) );
    }

    @GetMapping(value = "/find/{id}")
    public ResponseEntity getPost(@PathVariable Long id) {
        CommentDto commentDto = commentMapper.toDto(this.commentService.getPost(id));
        return new ResponseEntity<>(commentDto, HttpStatus.OK);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity getCommentsByPostId(@PathVariable Long id) {
        return new ResponseEntity<>(commentMapper.toDtoList(this.commentService.getAllByPostId(id)), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity updateComment(@RequestBody final CommentDtov2 commentDto) {
        return new ResponseEntity<>(this.commentService.update(commentv2Mapper.toEntity(commentDto)), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCommentById(@PathVariable final long id) {
        this.commentService.deleteComment(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
