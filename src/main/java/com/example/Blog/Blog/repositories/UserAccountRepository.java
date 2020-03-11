package com.example.Blog.Blog.repositories;

import com.example.Blog.Blog.entities.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {}
