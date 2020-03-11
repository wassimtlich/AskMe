package com.example.Blog.Blog.controllers;

import com.example.Blog.Blog.dto.PostDto;
import com.example.Blog.Blog.dto.PostDtoV2;
import com.example.Blog.Blog.entities.Post;
import com.example.Blog.Blog.services.PostServiceImpl;
import com.example.Blog.Blog.services.UserAccountServiceImpl;
import com.example.Blog.Blog.util.PostMapper;
import com.example.Blog.Blog.util.PostMapperv2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/posts")
public class PostController {

    private UserAccountServiceImpl userService;

    @Autowired
    private PostMapper postMapper;

    @Autowired
    private PostMapperv2 postMapperv2;

    @Autowired
    private PostServiceImpl postService;

    @GetMapping(path = "/findAll")
    public List<PostDtoV2> getAllPosts() {
        List<PostDtoV2> posts = postMapperv2.toDtoList( this.postService.getPosts());
            return posts;

    }

    @PostMapping(path = "/save")
    public ResponseEntity CreatePost(@RequestBody PostDtoV2 postDto) {
        Post p = postMapperv2.toEntity(postDto);
        return new ResponseEntity<>(this.postService.savePost(p), HttpStatus.CREATED);
    }

    @GetMapping(value = "/find/{id}")
    public ResponseEntity getPost(@PathVariable Long id) {
        PostDto postDto = postMapper.toDto(this.postService.getPost(id));
            return new ResponseEntity<>(postDto, HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public ResponseEntity updatePost(@RequestBody PostDtoV2 postDto) {
        this.postService.update(postMapperv2.toEntity(postDto));
        return new ResponseEntity<>(postMapperv2.toEntity(postDto), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity deletePost(@PathVariable Long id) {

        String msg = this.postService.deletePost(id);

        return new  ResponseEntity<>( null, HttpStatus.ACCEPTED);
    }

    @PostMapping("/like/{id}")
    public boolean likePost(@PathVariable final Long id) {
        return this.postService.like(id);
    }

    @PostMapping("/unlike/{id}")
    public boolean unlikePost(@PathVariable final Long id) {
        return this.postService.unLike(id);
    }

}
