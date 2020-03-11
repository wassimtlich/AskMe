package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Post;
import com.example.Blog.Blog.entities.Tag;
import com.example.Blog.Blog.repositories.PostRepository;
import com.example.Blog.Blog.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements IPostService {

    @Autowired
    PostRepository postRepository;

    @Autowired
    TagRepository tagRepository;
    public PostServiceImpl(PostRepository postRepository, TagRepository tagRepository){
        this.postRepository=postRepository;
        this.tagRepository = tagRepository;
    }

    @Override
    public List<Post> getPosts() {
        List<Post> posts = new ArrayList<>();
        posts = (List<Post>)  this.postRepository.findAllSortedByDateReverse();
        return posts;
    }

    @Override
    public Post update( Post post) {
        List<Long> ids = new ArrayList<>();
        post.getTags().forEach(t ->ids.add(t.getId()));
        post.setTags((List<Tag>) tagRepository.findAll().stream().filter(req -> ids.contains(req.getId()))
                .collect(Collectors.toList()));
        this.postRepository.saveAndFlush(post);
        return post;
    }

    @Override
    public Post savePost(Post post) {
        Post post1 = post;
        List<Long> ids = new ArrayList<>();
        post.getTags().forEach(t ->ids.add(t.getId()));
        post1.setTags((List<Tag>) tagRepository.findAll().stream().filter(req -> ids.contains(req.getId()))
                .collect(Collectors.toList()));
        post1.getTags().forEach(tag -> {
            tag.setPosts(Arrays.asList(post1));
        });
        return this.postRepository.save(post);
    }

    @Override
    public Post getPost(Long id) {
        return this.postRepository.findById(id).get();
    }

    @Override
    public String deletePost(Long id) {
        this.postRepository.deleteById(id);
        return new String("Post deleted");
    }

    @Override
    public boolean like(final Long id) {
            if (postRepository.updateRating(1L, id) != 0)
            return true;

        return false;
    }

    @Override
    public boolean unLike(final Long id) {
        if (postRepository.updateRating(-1L, id) != 0)
            return true;

        return false;
    }

}
