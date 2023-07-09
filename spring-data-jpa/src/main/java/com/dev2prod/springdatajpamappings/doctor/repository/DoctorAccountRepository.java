package com.dev2prod.springdatajpamappings.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.doctor.entity.DoctorAccount;

public interface DoctorAccountRepository extends JpaRepository<DoctorAccount,Long>{

}
