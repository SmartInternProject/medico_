package com.dev2prod.springdatajpamappings.appointment.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

import com.dev2prod.springdatajpamappings.doctor.entity.Doctor;
import com.dev2prod.springdatajpamappings.patient.entity.Patient;

@Entity
@Transactional
@Table(name = "prescription")
public class Prescription {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String medication;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String dosage;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String frequency;
	
	@Column(columnDefinition = "date not null")
	private Date startDate;
	
	@Column(columnDefinition = "date not null")
	private Date endDate;
	
	@Column(columnDefinition = "varchar(1000) not null")
	private String instructions;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Patient patient;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Doctor doctor;
	
	public Prescription() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Prescription [id=" + id + ", medication=" + medication + ", dosage=" + dosage + ", frequency="
				+ frequency + ", startDate=" + startDate + ", endDate=" + endDate + ", instructions=" + instructions
				+ ", patient=" + patient + ", doctor=" + doctor + "]";
	}

	public Prescription(Long id, String medication, String dosage, String frequency, Date startDate, Date endDate,
			String instructions, Patient patient, Doctor doctor) {
		super();
		this.id = id;
		this.medication = medication;
		this.dosage = dosage;
		this.frequency = frequency;
		this.startDate = startDate;
		this.endDate = endDate;
		this.instructions = instructions;
		this.patient = patient;
		this.doctor = doctor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMedication() {
		return medication;
	}

	public void setMedication(String medication) {
		this.medication = medication;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	
	
	
}
