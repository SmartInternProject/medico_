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
@Table(name = "appointment_payment")
public class AppointmentPayment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(99) not null")
	private String amount;
	
	@Column(columnDefinition = "date not null")
	private Date dateOfPayment;
	
	@Column(columnDefinition = "varchar(9999) not null")
	private String invoiceNumber;
	
	@Column(columnDefinition = "varchar(99) not null")
	private String paymentMethod;
	
	@Column(columnDefinition = "varchar(10) not null")
	private String paymentStatus;
	
	@Column(columnDefinition = "date not null")
	private Date createdOn;
	
	@Column(columnDefinition = "date not null")
	private Date lastUpdatedOn;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Doctor doctor;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Patient patient;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Appointment appoitment;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public Date getDateOfPayment() {
		return dateOfPayment;
	}

	public void setDateOfPayment(Date dateOfPayment) {
		this.dateOfPayment = dateOfPayment;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
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

	public Appointment getAppoitment() {
		return appoitment;
	}

	public void setAppoitment(Appointment appoitment) {
		this.appoitment = appoitment;
	}

	public AppointmentPayment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppointmentPayment(Long id, String amount, Date dateOfPayment, String invoiceNumber, String paymentMethod,
			String paymentStatus, Date createdOn, Date lastUpdatedOn, Doctor doctor, Patient patient,
			Appointment appoitment) {
		super();
		this.id = id;
		this.amount = amount;
		this.dateOfPayment = dateOfPayment;
		this.invoiceNumber = invoiceNumber;
		this.paymentMethod = paymentMethod;
		this.paymentStatus = paymentStatus;
		this.createdOn = createdOn;
		this.lastUpdatedOn = lastUpdatedOn;
		this.doctor = doctor;
		this.patient = patient;
		this.appoitment = appoitment;
	}

	@Override
	public String toString() {
		return "AppointmentPayment [id=" + id + ", amount=" + amount + ", dateOfPayment=" + dateOfPayment
				+ ", invoiceNumber=" + invoiceNumber + ", paymentMethod=" + paymentMethod + ", paymentStatus="
				+ paymentStatus + ", createdOn=" + createdOn + ", lastUpdatedOn=" + lastUpdatedOn + ", doctor=" + doctor
				+ ", patient=" + patient + ", appoitment=" + appoitment + "]";
	}
	
	
	
	
}
