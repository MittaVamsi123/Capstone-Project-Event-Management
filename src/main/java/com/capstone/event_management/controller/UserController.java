package com.capstone.event_management.controller;

import com.capstone.event_management.model.Event;
import com.capstone.event_management.model.User;
import com.capstone.event_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/list")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @PostMapping("/users")
    public void createUser(@RequestBody User user){
        userRepository.save(user);
    }
    @GetMapping("/users/{userId}")
    public User findUserById(@PathVariable int userId) {
        return userRepository.findById(userId).orElseThrow();
    }

}
