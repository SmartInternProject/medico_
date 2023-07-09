package com.dev2prod.springdatajpamappings.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.appointment.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{

}
