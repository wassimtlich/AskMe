package com.example.Blog.Blog.services;

import com.example.Blog.Blog.entities.UserAccount;
import com.example.Blog.Blog.repositories.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class UserAccountServiceImpl implements IUserAccountService {

    @Autowired
    UserAccountRepository userRepository;

    @Override
    public UserAccount saveUser(UserAccount userAccount) {
        return this.userRepository.save(userAccount);
    }

    @Override
    public List<UserAccount> getUsers() {
        return (List<UserAccount>) this.userRepository.findAll();
    }

    @Override
    public UserAccount getUser(Long id) {
        return this.userRepository.findById(id).get();
    }

    @Override
    public String deleteUser(Long id) {
        UserAccount userAccount = this.getUser(id);
        userAccount.setDeleted_at(new Date());
        return "User deleted";
    }



}