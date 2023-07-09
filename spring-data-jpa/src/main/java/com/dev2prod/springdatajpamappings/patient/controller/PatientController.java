package com.dev2prod.springdatajpamappings.patient.controller;

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

import com.dev2prod.springdatajpamappings.loginData.entity.LoginData;
import com.dev2prod.springdatajpamappings.patient.entity.Patient;
import com.dev2prod.springdatajpamappings.patient.entity.PatientAccount;
import com.dev2prod.springdatajpamappings.patient.repository.PatientAccountRepository;
import com.dev2prod.springdatajpamappings.patient.repository.PatientRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientController {
	
	@Autowired
	PatientRepository patientRepository;
	
	@Autowired
	PatientAccountRepository patientAccountRepository;
	
	@PostMapping("/api/patient")
	public ResponseEntity<Long> savePatient(@RequestBody Patient patient)
	{
		Long id = (patientRepository.save(patient)).getId();
		return ResponseEntity.ok(id);
	}
	
	@PostMapping("/api/patientAccount")
	public ResponseEntity<String> savePatientAccount(@RequestBody PatientAccount patientAccount){
		
		patientAccountRepository.save(patientAccount);
		return ResponseEntity.ok("Registered");
		
	}
	

	
	@GetMapping("/api/patient")
	public ResponseEntity<List<Patient>> showPatients()
	{
		return new ResponseEntity<>(patientRepository.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/api/patient/{id}")
	public ResponseEntity<Patient> showPatientById(@PathVariable Long id)
	{
		Optional<Patient> patient = patientRepository.findById(id);
		if(patient.isPresent()) {
			return new ResponseEntity<>(patient.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/api/patientAccounts")
	public ResponseEntity<List<PatientAccount>> showPatientsAccount()
	{
		return new ResponseEntity<>(patientAccountRepository.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/api/patientAccount")
	public ResponseEntity<Long> authenticatePatientAccount(@RequestBody LoginData loginData)
	{
		//To do;
		
		PatientAccount patientAccount = patientAccountRepository.findByUserName(loginData.getUserName());
		if(patientAccount == null) {
			System.out.println("User Not Found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(!patientAccount.getPassword().equals(loginData.getPassword())){
			System.out.println("Password mismatch");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		return new ResponseEntity<>(patientAccount.getId(),HttpStatus.OK);
	}
	

}
