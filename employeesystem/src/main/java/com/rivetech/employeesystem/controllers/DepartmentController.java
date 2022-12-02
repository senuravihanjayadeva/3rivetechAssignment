package com.rivetech.employeesystem.controllers;

import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/department")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping
    public Department addDepartment(@RequestBody Department department) throws Exception {
        Department response = departmentService.addDepartment(department);
        return response;
    }

    @GetMapping("/")
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("/{departmentID}")
    public Department getDepartmentById(@PathVariable String departmentID) {
        return departmentService.getDepartmentById(departmentID);
    }

    @DeleteMapping("/{departmentID}")
    public String deleteDepartmentByID(@PathVariable String departmentID){
        return departmentService.deleteDepartmentByID(departmentID);
    }

    @PutMapping("/")
    public Department updateDepartmentById(@RequestBody Department department){
        return departmentService.updateDepartmentById(department);
    }
}
