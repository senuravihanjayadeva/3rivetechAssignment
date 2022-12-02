package com.rivetech.employeesystem.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Department {

    @Id
    private String departmentID;
    private String name;

    @OneToMany(orphanRemoval = true, cascade = CascadeType.PERSIST, mappedBy = "department")
    private List<Employee> employees;

    public Department() {
    }

    public Department(String departmentID, String name, List<Employee> employees) {
        this.departmentID = departmentID;
        this.name = name;
        this.employees = employees;
    }

    public String getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(String departmentID) {
        this.departmentID = departmentID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @JsonManagedReference
    public List<Employee> getEmployees() {
        return employees;
    }
}
