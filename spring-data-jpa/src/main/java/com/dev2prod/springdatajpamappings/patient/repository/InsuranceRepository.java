package com.dev2prod.springdatajpamappings.patient.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.patient.entity.Insurance;

public interface InsuranceRepository extends JpaRepository<Insurance, Long>{

}
