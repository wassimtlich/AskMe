package com.example.Blog.Blog.util;

import com.example.Blog.Blog.dto.CommentDto;
import com.example.Blog.Blog.entities.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface CommentMapper extends EntityMapper<CommentDto, Comment> {
}
