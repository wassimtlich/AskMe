package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Post;
import java.util.List;

public interface IPostService {

    public List<Post> getPosts();
    public Post savePost(Post post);
    public Post getPost(Long id);
    public String deletePost(Long id);
    public Post update(final Post post) ;
    public boolean like(final Long id);
    public boolean unLike(final Long id);


}
