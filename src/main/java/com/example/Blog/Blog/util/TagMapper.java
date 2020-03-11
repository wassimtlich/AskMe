package com.example.Blog.Blog.util;

import com.example.Blog.Blog.dto.TagDto;
import com.example.Blog.Blog.entities.Tag;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface TagMapper extends EntityMapper<TagDto, Tag> {
}

