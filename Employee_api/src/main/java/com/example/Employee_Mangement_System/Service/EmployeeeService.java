package com.example.Employee_Mangement_System.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Employee_Mangement_System.Entity.Employee;
import com.example.Employee_Mangement_System.Repositiory.EmployeeRepository;

import ch.qos.logback.core.model.conditional.ElseModel;

@Service
public class EmployeeeService {
	@Autowired
	EmployeeRepository employeeRepository;

	public Employee addEmployee(Employee employee) {
	return employeeRepository.save(employee);

	}

	public Optional<Employee> getEmployeeByID(Integer id) {
		
		return  employeeRepository.findById(id);
	}

	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
		
	}
		

	public Employee getEmployeeById(Integer id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with ID: " + id));
    }

	
	public Employee updateEmployee(Employee employee) {
		
		return employeeRepository.save(employee);
	}

	public void deleteById(Integer id) {
		employeeRepository.deleteById(id);
		
	}

	public void deleteAllEmployee() {
	employeeRepository.deleteAll();
		
	}

	public void saveAll(List<Employee> employee) {
		employeeRepository.saveAll(employee);
	
	
	}
	}
	


