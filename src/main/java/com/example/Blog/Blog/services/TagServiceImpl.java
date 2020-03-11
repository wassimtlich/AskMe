package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.Tag;
import com.example.Blog.Blog.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TagServiceImpl implements ITagService{

    @Autowired
    TagRepository tagRepository;

    @Override
    public Tag getTag(Long id){ return this.tagRepository.findById(id).get(); }

    @Override
    public Tag saveTag(Tag tag){
        return this.tagRepository.save(tag);
    }

    @Override
    public void deleteTag(Long id){
        this.tagRepository.deleteById( id);
    }

    @Override
    public List<Tag> getAllByPostId(final Long id){
        return  this.tagRepository.findByPostsId(id);
    }

    @Override
    public List<Tag> getTags() {
        return (List<Tag>) this.tagRepository.findAll();
    }
}
