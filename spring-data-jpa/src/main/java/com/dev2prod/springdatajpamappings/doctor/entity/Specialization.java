package com.dev2prod.springdatajpamappings.doctor.entity;

import java.util.HashSet;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Transactional
@Table(name = "specialization")
public class Specialization {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String specialization;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "specialization")
	private Set<Doctor> doctor = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public Set<Doctor> getDoctor() {
		return doctor;
	}

	public void setDoctor(Set<Doctor> doctor) {
		this.doctor = doctor;
	}

	public Specialization() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Specialization(Long id, String specialization, Set<Doctor> doctor) {
		super();
		this.id = id;
		this.specialization = specialization;
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "Specialization [id=" + id + ", specialization=" + specialization + ", doctor=" + doctor + "]";
	}
	
	
	
	
}
