package com.dev2prod.springdatajpamappings.doctor.entity;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.transaction.Transactional;

import java.util.List;



@Entity
@Transactional
@Table(name = "doctor")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(columnDefinition = "varchar(10) not null")
	private String ssn;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String firstName;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String lastName;
	
	@Column(columnDefinition = "date not null")
	private Date dateOfBirth;

	@Column(columnDefinition = "varchar(8) not null")
	private String gender;
	
	@Column(columnDefinition = "varchar(13) not null")
	private String phoneNo;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String email;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String bloodGroup;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String address;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String city;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String state;
	
	@Column(columnDefinition = "varchar(10) not null")
	private String postalCode;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String country;
	
	@Column(columnDefinition = "date not null")
	private Date createdOn;
	
	@Column(columnDefinition = "date not null")
	private Date lastUpdatedOn;
	
	@Column(columnDefinition = "varchar(99) not null")
	private String practicingFrom;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "doc_id",referencedColumnName = "id")
	private List<AcademicDetails> academicDetails;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "doc_id",referencedColumnName = "id")
	private List<AppointmentSchedule> appointmentScheduls;
		
	
	@ManyToMany
	@JoinTable(name = "doctor_specialization",
		joinColumns = @JoinColumn(name = "doctor_id"),
		inverseJoinColumns = @JoinColumn(name = "specialization_id")
	)
	private Set<Specialization> specialization = new HashSet<>();
	
	public List<AppointmentSchedule> getAppointmentScheduls() {
		return appointmentScheduls;
	}

	public void setAppointmentScheduls(List<AppointmentSchedule> appointmentScheduls) {
		this.appointmentScheduls = appointmentScheduls;
	}

	public String getPracticingFrom() {
		return practicingFrom;
	}

	public void setPracticingFrom(String practicingFrom) {
		this.practicingFrom = practicingFrom;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	

	public Set<Specialization> getSpecialization() {
		return specialization;
	}

	public void setSpecialization(Set<Specialization> specialization) {
		this.specialization = specialization;
	}

	
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
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

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
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

	

	public List<AcademicDetails> getAcademicDetails() {
		return academicDetails;
	}

	public void setAcademicDetails(List<AcademicDetails> academicDetails) {
		this.academicDetails = academicDetails;
	}


	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Doctor(Long id, String ssn, String firstName, String lastName, Date dateOfBirth, String gender,
			String phoneNo, String email, String bloodGroup, String address, String city, String state,
			String postalCode, String country, Date createdOn, Date lastUpdatedOn, String practicingFrom,
			List<AcademicDetails> academicDetails, List<AppointmentSchedule> appointmentScheduls,
			Set<Specialization> specialization) {
		super();
		this.id = id;
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.phoneNo = phoneNo;
		this.email = email;
		this.bloodGroup = bloodGroup;
		this.address = address;
		this.city = city;
		this.state = state;
		this.postalCode = postalCode;
		this.country = country;
		this.createdOn = createdOn;
		this.lastUpdatedOn = lastUpdatedOn;
		this.practicingFrom = practicingFrom;
		this.academicDetails = academicDetails;
		this.appointmentScheduls = appointmentScheduls;
		this.specialization = specialization;
	}

	@Override
	public String toString() {
		return "Doctor [id=" + id + ", ssn=" + ssn + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", dateOfBirth=" + dateOfBirth + ", gender=" + gender + ", phoneNo=" + phoneNo + ", email=" + email
				+ ", bloodGroup=" + bloodGroup + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", postalCode=" + postalCode + ", country=" + country + ", createdOn=" + createdOn
				+ ", lastUpdatedOn=" + lastUpdatedOn + ", practicingFrom=" + practicingFrom + ", academicDetails="
				+ academicDetails + ", appointmentScheduls=" + appointmentScheduls + ", specialization="
				+ specialization + "]";
	}

	
	

	

	

	



	

	
}
