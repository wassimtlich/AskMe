package com.example.Blog.Blog.util;

import com.example.Blog.Blog.dto.PostDtoV2;
import com.example.Blog.Blog.entities.Post;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface PostMapperv2 extends EntityMapper<PostDtoV2, Post> {

}