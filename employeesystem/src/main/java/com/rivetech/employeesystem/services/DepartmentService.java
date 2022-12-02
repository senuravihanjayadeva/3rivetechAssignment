package com.rivetech.employeesystem.services;

import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    public Department addDepartment(Department department){
        return departmentRepository.save(department);
    }

    public List<Department> getAllDepartments(){
        return (List<Department>) departmentRepository.findAll();
    }

    public Department getDepartmentById(String departmentID){
        return departmentRepository.findById(departmentID).orElse(null);
    }

    public String deleteDepartmentByID(String departmentID){
        departmentRepository.deleteById(departmentID);
        return "Department Record deleted";
    }

    public Department updateDepartmentById(Department department){
        Department existingDepartment = departmentRepository.findById(department.getDepartmentID()).orElse(null);
        existingDepartment.setName(department.getName());
        if(department.getEmployees().size() > 0) {
            existingDepartment.setEmployees(department.getEmployees());
        }
        return departmentRepository.save(existingDepartment);
    }

}
