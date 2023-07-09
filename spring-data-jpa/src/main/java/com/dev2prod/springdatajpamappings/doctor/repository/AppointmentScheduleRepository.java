package com.dev2prod.springdatajpamappings.doctor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev2prod.springdatajpamappings.doctor.entity.AppointmentSchedule;

public interface AppointmentScheduleRepository extends JpaRepository<AppointmentSchedule,Long>{

}
