package com.dev2prod.springdatajpamappings.patient.entity;

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

@Entity
@Transactional
@Table(name = "patient")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(columnDefinition = "varchar(10)")
	private String ssn;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String firstName;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String lastName;
	
	@Column(columnDefinition = "date not null")
	private Date dateOfBirth;
	
	@Column(columnDefinition = "varchar(8) not null")
	private String gender;

	@Column(columnDefinition = "int not null")
	private int weight;
	
	@Column(columnDefinition = "int not null")
	private int height;
	
	@Column(columnDefinition = "varchar(4) not null")
	private String bloodGroup;
	
	@Column(columnDefinition = "varchar(12) not null")
	private String phoneNo;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String email;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String address;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String city;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String state;
	
	@Column(columnDefinition = "varchar(10) not null")
	private String postalCode;
	
	@Column(columnDefinition = "varchar(100)")
	private String country;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String relationshipStatus;
	

	@Column(columnDefinition = "date ")
	private Date createdOn;
	
	@Column(columnDefinition = "date ")
	private Date lastUpdatedOn;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Insurance insurance;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	
	public String getRelationshipStatus() {
		return relationshipStatus;
	}

	public void setRelationshipStatus(String relationshipStatus) {
		this.relationshipStatus = relationshipStatus;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public Insurance getInsurance() {
		return insurance;
	}

	public void setInsurance(Insurance insurance) {
		this.insurance = insurance;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patient(long id, String ssn, String firstName, String lastName, Date dateOfBirth, String gender, int weight,
			int height, String bloodGroup, String phoneNo, String email, String address, String city, String state,
			String postalCode, String country, String relationshipStatus, Date createdOn, Date lastUpdatedOn,
			Insurance insurance) {
		super();
		this.id = id;
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.weight = weight;
		this.height = height;
		this.bloodGroup = bloodGroup;
		this.phoneNo = phoneNo;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.postalCode = postalCode;
		this.country = country;
		this.relationshipStatus = relationshipStatus;
		this.createdOn = createdOn;
		this.lastUpdatedOn = lastUpdatedOn;
		this.insurance = insurance;
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", ssn=" + ssn + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", dateOfBirth=" + dateOfBirth + ", gender=" + gender + ", weight=" + weight + ", height=" + height
				+ ", bloodGroup=" + bloodGroup + ", phoneNo=" + phoneNo + ", email=" + email + ", address=" + address
				+ ", city=" + city + ", state=" + state + ", postalCode=" + postalCode + ", country=" + country
				+ ", relationshipStatus=" + relationshipStatus + ", createdOn=" + createdOn + ", lastUpdatedOn="
				+ lastUpdatedOn + ", insurance=" + insurance + "]";
	}



	

	
	
}
