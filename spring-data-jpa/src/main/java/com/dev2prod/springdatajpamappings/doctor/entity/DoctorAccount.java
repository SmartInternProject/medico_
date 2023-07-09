package com.dev2prod.springdatajpamappings.doctor.entity;

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
@Table(name = "doc_account")
public class DoctorAccount {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(100)")
	private String userName;
	
	@Column(columnDefinition = "varchar(100)")
	private String password;

	@OneToOne(cascade = CascadeType.ALL)
	private Doctor doctor;

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

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "DoctorAccount [id=" + id + ", userName=" + userName + ", password=" + password + ", doctor=" + doctor
				+ "]";
	}

	public DoctorAccount(Long id, String userName, String password, Doctor doctor) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.doctor = doctor;
	}

	public DoctorAccount() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
