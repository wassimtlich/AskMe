package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Tag;

import java.util.List;

public interface ITagService {

    public List<Tag> getTags() ;

    public Tag getTag(Long id) ;

    public Tag saveTag(Tag tag);

    public void deleteTag(Long id);

    public List<Tag> getAllByPostId(final Long id);
}
