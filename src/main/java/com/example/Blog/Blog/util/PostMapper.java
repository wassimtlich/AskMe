package com.example.Blog.Blog.util;



import com.example.Blog.Blog.dto.PostDto;
import com.example.Blog.Blog.entities.Post;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface PostMapper extends EntityMapper<PostDto, Post> {

}
