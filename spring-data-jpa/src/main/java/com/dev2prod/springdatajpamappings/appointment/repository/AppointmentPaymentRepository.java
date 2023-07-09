package com.dev2prod.springdatajpamappings.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.appointment.entity.AppointmentPayment;

public interface AppointmentPaymentRepository extends JpaRepository<AppointmentPayment, Long>{

}
