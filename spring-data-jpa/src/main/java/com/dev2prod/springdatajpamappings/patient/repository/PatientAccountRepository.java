package com.dev2prod.springdatajpamappings.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.patient.entity.PatientAccount;

public interface PatientAccountRepository extends JpaRepository<PatientAccount, Long>{
	
	PatientAccount findByUserName(String userName);
}
