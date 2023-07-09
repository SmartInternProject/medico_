package com.dev2prod.springdatajpamappings.doctor.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;


@Entity
@Transactional
@Table(name = "academic_details")
public class AcademicDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String degree;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String specialization;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String medicalSchool;
	
	@Column(columnDefinition = "date not null")
	private Date graduationYear;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String boardCertification;
	
	@ManyToOne
	@JoinColumn(name = "doc_id")
	private Doctor doctor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getMedicalSchool() {
		return medicalSchool;
	}

	public void setMedicalSchool(String medicalSchool) {
		this.medicalSchool = medicalSchool;
	}

	public Date getGraduationYear() {
		return graduationYear;
	}

	public void setGraduationYear(Date graduationYear) {
		this.graduationYear = graduationYear;
	}

	public String getBoardCertification() {
		return boardCertification;
	}

	public void setBoardCertification(String boardCertification) {
		this.boardCertification = boardCertification;
	}

	@Override
	public String toString() {
		return "AcademicDetails [id=" + id + ", degree=" + degree + ", specialization=" + specialization
				+ ", medicalSchool=" + medicalSchool + ", graduationYear=" + graduationYear + ", boardCertification="
				+ boardCertification + "]";
	}

	public AcademicDetails(Long id, String degree, String specialization, String medicalSchool, Date graduationYear,
			String boardCertification) {
		super();
		this.id = id;
		this.degree = degree;
		this.specialization = specialization;
		this.medicalSchool = medicalSchool;
		this.graduationYear = graduationYear;
		this.boardCertification = boardCertification;
	}

	public AcademicDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
