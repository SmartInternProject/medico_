package com.dev2prod.springdatajpamappings.patient.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

@Entity
@Transactional
@Table(name = "patient_account")
public class PatientAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String userName;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String password;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Patient patient;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	@Override
	public String toString() {
		return "PatientAccount [id=" + id + ", userName=" + userName + ", password=" + password + ", patient=" + patient
				+ "]";
	}

	public PatientAccount(Long id, String userName, String password, Patient patient) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.patient = patient;
	}

	public PatientAccount() {
		super();
		// TODO Auto-generated constructor stub
	}
}
