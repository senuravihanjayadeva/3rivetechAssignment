package com.rivetech.employeesystem.services;

import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.models.Employee;
import com.rivetech.employeesystem.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployee(){
        return (List<Employee>) employeeRepository.findAll();
    }

    public Employee getEmployeeById(String employeeID){
        return employeeRepository.findById(employeeID).orElse(null);
    }

    public String deleteEmployeeByID(String employeeID){
        employeeRepository.deleteById(employeeID);
        return "Employee Record deleted";
    }

    public Employee updateEmployeeById(Employee employee){
        Employee existingEmployee = employeeRepository.findById(employee.getEmployeeID()).orElse(null);
        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setDepartment(employee.getDepartment());
        return employeeRepository.save(existingEmployee);
    }
}
