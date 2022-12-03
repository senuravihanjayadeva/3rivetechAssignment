package com.rivetech.employeesystem.controllers;

import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/department")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    @PostMapping
    public Department addDepartment(Department department){
        return departmentRepository.save(department);
    }

    @GetMapping("/")
    public List<Department> getAllDepartments(){
        return (List<Department>) departmentRepository.findAll();
    }

    @GetMapping("/{departmentID}")
    public Department getDepartmentById(String departmentID){
        return departmentRepository.findById(departmentID).orElse(null);
    }

    @DeleteMapping("/{departmentID}")
    public String deleteDepartmentByID(String departmentID){
        departmentRepository.deleteById(departmentID);
        return "Department Record deleted";
    }

    @PutMapping("/")
    public Department updateDepartmentById(Department department){
        Department existingDepartment = departmentRepository.findById(department.getDepartmentID()).orElse(null);
        existingDepartment.setName(department.getName());
        if(department.getEmployees().size() > 0) {
            existingDepartment.setEmployees(department.getEmployees());
        }
        return departmentRepository.save(existingDepartment);
    }
}
