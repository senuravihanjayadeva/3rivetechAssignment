package com.rivetech.employeesystem.repositories;

import com.rivetech.employeesystem.models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {
}
