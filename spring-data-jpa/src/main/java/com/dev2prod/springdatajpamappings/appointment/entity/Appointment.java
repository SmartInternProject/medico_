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

import com.dev2prod.springdatajpamappings.doctor.entity.AppointmentSchedule;
import com.dev2prod.springdatajpamappings.doctor.entity.Doctor;
import com.dev2prod.springdatajpamappings.patient.entity.Patient;

@Entity
@Transactional
@Table(name = "appointment")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(12) not null")
	private String status;
	
	@Column(columnDefinition = "date not null")
	private Date createdOn;
	
	@Column(columnDefinition = "date not null")
	private Date lastUpdatedOn;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Prescription prescription;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Doctor doctor;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Patient patient;
	
	@OneToOne(cascade = CascadeType.ALL)
	private AppointmentSchedule appointmentSchedule;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public Date getLastUpdatedOn() {
		return lastUpdatedOn;
	}

	public void setLastUpdatedOn(Date lastUpdatedOn) {
		this.lastUpdatedOn = lastUpdatedOn;
	}

	public Prescription getPrescription() {
		return prescription;
	}

	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public AppointmentSchedule getAppointmentSchedule() {
		return appointmentSchedule;
	}

	public void setAppointmentSchedule(AppointmentSchedule appointmentSchedule) {
		this.appointmentSchedule = appointmentSchedule;
	}

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Appointment(Long id, String status, Date createdOn, Date lastUpdatedOn, Prescription prescription,
			Doctor doctor, Patient patient, AppointmentSchedule appointmentSchedule) {
		super();
		this.id = id;
		this.status = status;
		this.createdOn = createdOn;
		this.lastUpdatedOn = lastUpdatedOn;
		this.prescription = prescription;
		this.doctor = doctor;
		this.patient = patient;
		this.appointmentSchedule = appointmentSchedule;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", status=" + status + ", createdOn=" + createdOn + ", lastUpdatedOn="
				+ lastUpdatedOn + ", prescription=" + prescription + ", doctor=" + doctor + ", patient=" + patient
				+ ", appointmentSchedule=" + appointmentSchedule + "]";
	}
	
	
}
