package com.capstone.event_management.controller;

import com.capstone.event_management.model.Booking;
import com.capstone.event_management.model.Event;
import com.capstone.event_management.model.User;
import com.capstone.event_management.repository.BookingRepository;
import com.capstone.event_management.repository.EventRepository;
import com.capstone.event_management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventRepository eventRepository;
    @PostMapping("/bookings/{eventId}/{userId}")
    public boolean bookEvent(@PathVariable int eventId, @PathVariable int userId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        User user = userRepository.findById(userId).orElse(null);

        if (event != null && user != null) {
            Booking booking = new Booking();
            booking.setEvent(event);
            booking.setUser(user);
            bookingRepository.save(booking);
            return true;
        }
        return false;
    }

    @GetMapping("/bookings/{userId}")
    public List<Booking> findByBookingUser(@PathVariable int userId) {
        return bookingRepository.findBookingByUser_userId(userId);
    }


}
