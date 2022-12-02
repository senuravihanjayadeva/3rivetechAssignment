package com.rivetech.employeesystem.repositories;

import com.rivetech.employeesystem.models.Department;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends CrudRepository<Department, String> {
}
