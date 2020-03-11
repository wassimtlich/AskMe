package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.UserAccount;

import java.util.List;

public interface IUserAccountService {
    public UserAccount saveUser(UserAccount userAccount);
    public UserAccount getUser(Long id);
    public String deleteUser(Long id);
    public List<UserAccount> getUsers();
}
