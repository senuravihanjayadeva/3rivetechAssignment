package com.rivetech.employeesystem.controllers;

import com.rivetech.employeesystem.models.Employee;
import com.rivetech.employeesystem.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping
    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    @GetMapping("/")
    public List<Employee> getAllEmployee(){
        return (List<Employee>) employeeRepository.findAll();
    }

    @GetMapping("/{employeeID}")
    public Employee getEmployeeById(String employeeID){
        return employeeRepository.findById(employeeID).orElse(null);
    }

    @DeleteMapping("/{employeeID}")
    public String deleteEmployeeByID(String employeeID){
        employeeRepository.deleteById(employeeID);
        return "Employee Record deleted";
    }

    @PutMapping("/")
    public Employee updateEmployeeById(Employee employee){
        Employee existingEmployee = employeeRepository.findById(employee.getEmployeeID()).orElse(null);
        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setDepartment(employee.getDepartment());
        return employeeRepository.save(existingEmployee);
    }
}
