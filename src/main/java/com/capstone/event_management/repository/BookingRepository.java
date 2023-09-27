package com.capstone.event_management.repository;

import com.capstone.event_management.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking,Integer> {

    @Query("select t from Booking t where t.user.userId = ?1")
    List<Booking> findBookingByUser_userId(int userId);

}
