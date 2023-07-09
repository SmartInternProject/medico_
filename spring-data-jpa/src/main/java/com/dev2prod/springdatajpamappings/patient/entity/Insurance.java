package com.dev2prod.springdatajpamappings.patient.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

@Entity
@Transactional
@Table(name = "insurance")
public class Insurance {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(columnDefinition = "varchar(100) not null")
	private String policyProviderName;
	
	@Column(columnDefinition = "varchar(10) not null")
	private String policyCoverage;
	
	@Column(columnDefinition = "varchar(20) not null")
	private String policyId;
	
	@Column(columnDefinition = "varchar(45) not null")
	private String policyPeriod;
	
	@Column(columnDefinition = "varchar(45) not null")
	private String policyType;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPolicyProviderName() {
		return policyProviderName;
	}

	public void setPolicyProviderName(String policyProviderName) {
		this.policyProviderName = policyProviderName;
	}

	public String getPolicyCoverage() {
		return policyCoverage;
	}

	public void setPolicyCoverage(String policyCoverage) {
		this.policyCoverage = policyCoverage;
	}

	public String getPolicyId() {
		return policyId;
	}

	public void setPolicyId(String policyId) {
		this.policyId = policyId;
	}

	public String getPolicyPeriod() {
		return policyPeriod;
	}

	public void setPolicyPeriod(String policyPeriod) {
		this.policyPeriod = policyPeriod;
	}

	public String getPolicyType() {
		return policyType;
	}

	public void setPolicyType(String policyType) {
		this.policyType = policyType;
	}

	public Insurance(Long id, String policyProviderName, String policyCoverage, String policyId, String policyPeriod,
			String policyType) {
		super();
		this.id = id;
		this.policyProviderName = policyProviderName;
		this.policyCoverage = policyCoverage;
		this.policyId = policyId;
		this.policyPeriod = policyPeriod;
		this.policyType = policyType;
	}

	public Insurance() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Insurance [id=" + id + ", policyProviderName=" + policyProviderName + ", policyCoverage="
				+ policyCoverage + ", policyId=" + policyId + ", policyPeriod=" + policyPeriod + ", policyType="
				+ policyType + "]";
	}
	
	
}
