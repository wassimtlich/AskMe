package com.example.Blog.Blog.util;

import com.example.Blog.Blog.dto.CommentDtov2;
import com.example.Blog.Blog.entities.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface Commentv2Mapper extends EntityMapper<CommentDtov2, Comment> {
}
