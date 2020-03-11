package com.example.Blog.Blog.dto;

import com.example.Blog.Blog.entities.UserAccount;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

public class PostDto {

        private Long id;

        private String title;

        private String content;

       private Long ratingPoints;

        private UserAccount userAccount;

        @CreationTimestamp
        private Date created_at;

        @UpdateTimestamp
        private Date updated_at;

        public PostDto() {}

        public PostDto(String title, String content, UserAccount userAccount) {
            this.title = title;
            this.content = content;
            this.userAccount = userAccount;
        }


        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
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

        public Long getRatingPoints() {
        return ratingPoints;
    }

        public void setRatingPoints(long ratingPoints) {
        this.ratingPoints = ratingPoints;
    }

        public Long getId() {return id; }

        public void setId(Long id) { this.id = id;}

}
