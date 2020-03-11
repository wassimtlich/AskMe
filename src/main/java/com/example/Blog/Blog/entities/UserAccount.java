package com.example.Blog.Blog.entities;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "UserAccount")
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @OneToMany(mappedBy = "userAccount")
    private List<Post> posts=new ArrayList<Post>() ;

    @OneToMany(mappedBy = "userAccount")
    private List<Comment> comments= new ArrayList<Comment>();

    @Enumerated(EnumType.STRING)
    private RoleName Role;

    private String name;

    private String email;

    private String username;

    private String password;

    @CreationTimestamp
    private Date created_at;

    private Date deleted_at;


  public UserAccount() {
      this.Role= Role.ROLE_USER;
    }

    public UserAccount(String name, String email, String username, String password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getDeleted_at() {
        return deleted_at;
    }

    public void setDeleted_at(Date deleted_at) {
        this.deleted_at = deleted_at;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public void addComment(Comment comment){ this.comments.add(comment);
    }
    public void deleteComment(Comment comment){this.comments.remove(comment);}

    public void changeRole(){      this.Role= Role.ROLE_ADMIN; }


}