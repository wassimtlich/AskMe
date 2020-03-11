package com.example.Blog.Blog.controllers;

import com.example.Blog.Blog.dto.UserAccountDto;
import com.example.Blog.Blog.services.IUserAccountService;
import com.example.Blog.Blog.util.UserMapper;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RestController
@RequestMapping(value = "/users")
public class UserAccountController {

    @Autowired
    private IUserAccountService userService;

    @Autowired
    private UserMapper userMapper;

    @GetMapping(value = "/findAll")
    public ResponseEntity findAllUsers() {
        return new ResponseEntity<>(userMapper.toDtoList(this.userService.getUsers()),
                HttpStatus.OK);

    }

    @GetMapping(value = "/find/{id}")
    public ResponseEntity findUserById(@PathVariable Long id) {
        return new ResponseEntity<>(userMapper.toDto(this.userService.getUser(id)),
                HttpStatus.OK);

    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return new  ResponseEntity<>( this.userService.deleteUser(id), HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "/add")
    public ResponseEntity addUser(@RequestBody UserAccountDto userAccountDto) {
        userAccountDto.setPassword(BCrypt.hashpw(userAccountDto.getPassword(), BCrypt.gensalt()));
        userService.saveUser(userMapper.toEntity(userAccountDto));
        return new ResponseEntity<>(userAccountDto, HttpStatus.CREATED);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity update(@RequestBody UserAccountDto userDto) {
        if (userDto.getPassword().length() != 0)
            userDto.setPassword(BCrypt.hashpw(userDto.getPassword(), BCrypt.gensalt()));
        this.userService.saveUser(userMapper.toEntity(userDto));
        return new ResponseEntity<>(userDto, HttpStatus.CREATED);
    }



}
