package com.capstone.event_management.repository;

import com.capstone.event_management.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{

}
