package com.example.Employee_Mangement_System.Cotroller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.example.Employee_Mangement_System.Entity.Employee;
import com.example.Employee_Mangement_System.Service.EmployeeeService;
import com.fasterxml.jackson.core.sym.Name;

import jakarta.websocket.server.PathParam;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
     EmployeeeService employeeeService;
	
	@PostMapping("/saveemployee")
	public ResponseEntity<Employee>  createNewEmployee(@RequestBody Employee employee) {
		return ResponseEntity.ok(employeeeService.addEmployee(employee));
	}
	
	
	@GetMapping("/all-employees")
	public ResponseEntity <List <Employee>> getAllEmployee(){
		return
				 ResponseEntity.ok(employeeeService.getAllEmployee());
		}
	 
	@GetMapping("/{id}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable("id") Integer id){
	    Employee employee = employeeeService.getEmployeeById(id);
	
		
		return ResponseEntity.ok(employee);
		
	}
	

	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
	    Employee existingEmployee = employeeeService.getEmployeeById(id); 

	    if (existingEmployee != null) {
	      
	        existingEmployee.setName(employee.getName());
	        existingEmployee.setDepartment(employee.getDepartment());
	        existingEmployee.setGmail(employee.getGmail());
	        existingEmployee.setPhone_Number(employee.getPhone_Number());

	     
	        Employee updatedEmployee = employeeeService.updateEmployee(existingEmployee);
	        return ResponseEntity.ok(updatedEmployee);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}
         // Delete API
		@DeleteMapping("/{id}")
		public String deleteById(@PathVariable("id") Integer id) {
			employeeeService.deleteById(id);
			return "deleted Employee ID:"+id;
		}
		
		@DeleteMapping("/all-employee")
		public String deleteAllEmployee() {
			employeeeService.deleteAllEmployee();
			return "All Employees are Deleteed";
		}
		
		@PostMapping("/add-all")
		public  ResponseEntity<String> addAllEmployee(@RequestBody List<Employee> employee){
	    
			 employeeeService.saveAll(employee);
			return ResponseEntity.ok("All Employes  Added sucessfully ");
			 
	}
	 
}
