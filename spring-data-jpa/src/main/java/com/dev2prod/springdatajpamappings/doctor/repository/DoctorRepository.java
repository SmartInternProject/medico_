package com.dev2prod.springdatajpamappings.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.doctor.entity.Doctor;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
	List<Doctor> findAllBySpecializationId(Long specializationId);
}
