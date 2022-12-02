package com.rivetech.employeesystem.controllers;

import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.models.Employee;
import com.rivetech.employeesystem.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) throws Exception {
        Employee response = employeeService.addEmployee(employee);
        return response;
    }

    @GetMapping("/")
    public List<Employee> getAllEmployee() {
        return employeeService.getAllEmployee();
    }

    @GetMapping("/{employeeID}")
    public Employee getDepartmentById(@PathVariable String employeeID) {
        return employeeService.getEmployeeById(employeeID);
    }

    @DeleteMapping("/{employeeID}")
    public String deleteEmployeeByID(@PathVariable String employeeID){
        return employeeService.deleteEmployeeByID(employeeID);
    }

    @PutMapping("/")
    public Employee updateDepartmentById(@RequestBody Employee employee){
        return employeeService.updateEmployeeById(employee);
    }

}
