package com.example.Blog.Blog.dto;

import com.example.Blog.Blog.entities.Post;
import com.example.Blog.Blog.entities.UserAccount;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

public class CommentDtov2 {

    private Long id;

    private String content;

    private UserAccount userAccount;

    @CreationTimestamp
    private Date created_at;

    @UpdateTimestamp
    private Date updated_at;

    private Post post;

    public CommentDtov2() { }

    public CommentDtov2(String content, UserAccount userAccount) {
        this.content = content;
        this.userAccount = userAccount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public Post getPost() { return this.post;}

    public void setPost(Post post) { this.post = post; }


}
