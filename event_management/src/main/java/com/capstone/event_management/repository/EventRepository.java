package com.capstone.event_management.repository;

import com.capstone.event_management.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {
    List<Event> findByEventCategory(String category);
    List<Event> findByEventOrganizerName(String organizerName);

}
