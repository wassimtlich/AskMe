package com.example.Blog.Blog.dto;

import com.example.Blog.Blog.entities.Post;
import org.hibernate.annotations.CreationTimestamp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TagDto {

    Long Id;

    String name;

    @CreationTimestamp
    Date created_at;

    private List<Post> posts=new ArrayList<>();


    public TagDto() {}

    public TagDto(Long id, String name, Date created_at) {
        Id = id;
        this.name = name;
        this.created_at = created_at;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }
}
