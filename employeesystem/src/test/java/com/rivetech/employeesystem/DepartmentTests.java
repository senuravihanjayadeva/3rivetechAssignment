package com.rivetech.employeesystem;

import com.rivetech.employeesystem.controllers.DepartmentController;
import com.rivetech.employeesystem.models.Department;
import com.rivetech.employeesystem.models.Employee;
import com.rivetech.employeesystem.repositories.DepartmentRepository;
import com.rivetech.employeesystem.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(DepartmentController.class)
public class DepartmentTests {
    @MockBean
    private DepartmentRepository departmentRepository;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void shouldCreateDepartment() throws Exception {
        List<Employee> employees = new ArrayList();
        Department department = new Department("DT001", "Test Department", employees);

        mockMvc.perform(post("/api/department/").contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(department)))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    void shouldReturnTutorial() throws Exception {
        List<Employee> employees = new ArrayList();
        Department department = new Department("DT001", "Test Department", employees);

        when(departmentRepository.findById(department.getDepartmentID())).thenReturn(Optional.of(department));
        mockMvc.perform(get("/api/department/{departmentID}", department.getDepartmentID())).andExpect(status().isOk())
                .andExpect(jsonPath("$.departmentID").value(department.getDepartmentID()))
                .andExpect(jsonPath("$.name").value(department.getName()))
                .andDo(print());
    }
}
