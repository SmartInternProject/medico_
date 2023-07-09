package com.dev2prod.springdatajpamappings.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.patient.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long>{

}
