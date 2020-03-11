package com.example.Blog.Blog.util;

import com.example.Blog.Blog.dto.UserAccountDto;
import com.example.Blog.Blog.entities.UserAccount;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface UserMapper extends EntityMapper<UserAccountDto, UserAccount> {
}
