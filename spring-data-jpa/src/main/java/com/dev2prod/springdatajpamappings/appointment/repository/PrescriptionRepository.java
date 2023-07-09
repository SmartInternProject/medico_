package com.dev2prod.springdatajpamappings.appointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.appointment.entity.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long>{

}
