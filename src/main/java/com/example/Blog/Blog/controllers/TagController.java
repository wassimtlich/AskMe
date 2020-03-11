package com.example.Blog.Blog.controllers;

import com.example.Blog.Blog.dto.TagDto;
import com.example.Blog.Blog.services.TagServiceImpl;
import com.example.Blog.Blog.util.PostMapper;
import com.example.Blog.Blog.util.TagMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/Tags")
public class TagController {

    @Autowired
    private TagServiceImpl tagService;

    @Autowired
    private TagMapper tagMapper;

    @Autowired
    private PostMapper postMapper;

    @PostMapping("/create")
    public ResponseEntity createTag(@RequestBody TagDto tagDto) {
        return new ResponseEntity<>(this.tagService.saveTag(tagMapper.toEntity(tagDto)), HttpStatus.OK);
    }

    @GetMapping(path = "/findAll")
    public List<TagDto> getAllTags() {
        List<TagDto> tags = tagMapper.toDtoList( this.tagService.getTags());
        return tags;

    }
    @GetMapping(value = "/find/{id}")
    public ResponseEntity getPost(@PathVariable Long id) {
        TagDto tagDto = tagMapper.toDto(this.tagService.getTag(id));
        return new ResponseEntity<>(tagDto, HttpStatus.OK);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity getCommentsByPostId(@PathVariable Long id) {
        return new ResponseEntity<>(tagMapper.toDtoList(this.tagService.getAllByPostId(id)), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity updateComment(@RequestBody final TagDto tagDto) {
        return new ResponseEntity<>(this.tagService.saveTag(tagMapper.toEntity(tagDto)), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCommentById(@PathVariable final long id) {
        this.tagService.deleteTag(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
