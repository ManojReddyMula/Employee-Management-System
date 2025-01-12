package com.example.Employee_Mangement_System.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	
	
	private int Id;
	private String Name;
	private String Department;
	private String Gmail;
	private Long Phone_Number;
	
	
	public Employee() {
	
	}


	public int getId() {
		return Id;
	}


	public void setId(int id) {
		Id = id;
	}


	public String getName() {
		return Name;
	}


	public void setName(String name) {
		Name = name;
	}


	public String getDepartment() {
		return Department;
	}


	public void setDepartment(String department) {
		Department = department;
	}


	public String getGmail() {
		return Gmail;
	}


	public void setGmail(String gmail) {
		Gmail = gmail;
	}


	public Long getPhone_Number() {
		return Phone_Number;
	}


	public void setPhone_Number(Long phone_Number) {
		Phone_Number = phone_Number;
	}


	public Employee(int id, String name, String department, String gmail, Long phone_Number) {
		super();
		Id = id;
		Name = name;
		Department = department;
		Gmail = gmail;
		Phone_Number = phone_Number;
	}
	
	
}
