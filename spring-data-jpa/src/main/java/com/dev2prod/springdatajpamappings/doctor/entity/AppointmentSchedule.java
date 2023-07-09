package com.dev2prod.springdatajpamappings.doctor.entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Transactional
@Table(name="appointment_schedule")
public class AppointmentSchedule {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "date not null")
	private Date appDate;
	
	@Column(columnDefinition = "time not null")
	private Time startTime;
	
	@Column(columnDefinition = "time not null")
	private Time endTime;
	
	@Column(columnDefinition = "time")
	private Time duration;
	
	@Column(columnDefinition = "tinyint(1)")
	private boolean available;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "doc_id")
	private Doctor doctor;
	
	public Long getId() {
		return id;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getAppDate() {
		return appDate;
	}

	public void setAppDate(Date appDate) {
		this.appDate = appDate;
	}

	public Time getStartTime() {
		return startTime;
	}

	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}

	public Time getEndTime() {
		return endTime;
	}

	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}

	public Time getDuration() {
		return duration;
	}

	public void setDuration(Time duration) {
		this.duration = duration;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public AppointmentSchedule() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppointmentSchedule(Long id, Date appDate, Time startTime, Time endTime, Time duration, boolean available,
			Doctor doctor) {
		super();
		this.id = id;
		this.appDate = appDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.duration = duration;
		this.available = available;
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "AppointmentSchedule [id=" + id + ", appDate=" + appDate + ", startTime=" + startTime + ", endTime="
				+ endTime + ", duration=" + duration + ", available=" + available + ", doctor=" + doctor + "]";
	}

	
	
	
	
}
