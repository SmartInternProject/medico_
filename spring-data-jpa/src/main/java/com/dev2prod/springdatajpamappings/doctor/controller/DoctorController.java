package com.dev2prod.springdatajpamappings.doctor.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dev2prod.springdatajpamappings.doctor.entity.Doctor;
import com.dev2prod.springdatajpamappings.doctor.entity.Specialization;
import com.dev2prod.springdatajpamappings.doctor.repository.DoctorRepository;
import com.dev2prod.springdatajpamappings.doctor.repository.SpecializationRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class DoctorController {
	
	@Autowired
	DoctorRepository doctorRepository;
	
	@Autowired
	SpecializationRepository specializationRepository;
	
	@PostMapping("/api/doctor")
	public ResponseEntity<String> saveDoctor(@RequestBody Doctor doctor){
		doctorRepository.save(doctor);
		return ResponseEntity.ok("Saved");
	}
	
	@GetMapping("/api/doctors")
	public ResponseEntity<List<Doctor>> showDoctors()
	{
		return new ResponseEntity<>(doctorRepository.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/api/doctor/{id}")
	public ResponseEntity<Doctor> showDoctors(@PathVariable Long id)
	{
		Optional<Doctor> doctors = doctorRepository.findById(id);
		if(doctors.isPresent()) {
			return new ResponseEntity<>(doctors.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/api/doctorsWithSpecialization/{specializationId}")
	public ResponseEntity<List<Doctor>> getDoctorsBySpecialization(@PathVariable Long specializationId) {
        List<Doctor> doctors = doctorRepository.findAllBySpecializationId(specializationId);
        return ResponseEntity.ok(doctors);
    }
	
	@GetMapping("/api/specialization")
	public ResponseEntity<List<Specialization>> showSpecialization()
	{
		return new ResponseEntity<>(specializationRepository.findAll(),HttpStatus.OK);
	}
	
	
	
	
}
