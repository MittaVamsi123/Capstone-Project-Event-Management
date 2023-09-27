package com.capstone.event_management.controller;

import com.capstone.event_management.model.Event;
import com.capstone.event_management.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
@RestController
public class EventController {
    @Autowired
    private EventRepository eventRepository;


    @GetMapping("/events/list")
    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }
    @GetMapping("/events/{eventCategory}")
    public ResponseEntity<List<Event>> getEventByCategory(@PathVariable String eventCategory) {
        List<Event> events = eventRepository.findByEventCategory(eventCategory);
        return ResponseEntity.ok(events);
    }

    @GetMapping("/events/{organizerName}")
    public ResponseEntity<List<Event>> getEventByEventOrganizerName(@PathVariable String eventOrganizerName) {
        List<Event> events = eventRepository.findByEventOrganizerName(eventOrganizerName);
        return ResponseEntity.ok(events);
    }

    @PostMapping("/events")
    public void createEvent(@RequestBody Event event) {
        eventRepository.save(event);
    }

    @PutMapping("/events/{eventId}")
    public Event updateEvent(@PathVariable int eventId, @RequestBody Event event) {
        Event existsEvent = eventRepository.findById(eventId).orElseThrow();
        existsEvent.setEventLocation(event.getEventLocation());
        existsEvent.setEventName(event.getEventName());
        existsEvent.setEventCategory(event.getEventCategory());
        existsEvent.setEventOrganizerName(event.getEventOrganizerName());
        existsEvent.setEventDate(event.getEventDate());
        existsEvent.setEventPrice(event.getEventPrice());
        return eventRepository.save(existsEvent);
    }

}
