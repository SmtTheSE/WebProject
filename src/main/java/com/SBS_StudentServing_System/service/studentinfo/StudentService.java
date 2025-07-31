package com.SBS_StudentServing_System.service.studentinfo;

import com.SBS_StudentServing_System.dto.studentinfo.StudentProfileResponse;
import com.SBS_StudentServing_System.model.student.Student;
import com.SBS_StudentServing_System.repository.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentProfileResponse getLoggedInStudentInfo() {
        String accountId = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();

        Student student = studentRepository.findByLoginAccount_AccountId(accountId)
                .orElseThrow(() -> new RuntimeException("Student not found for account ID: " + accountId));

        return StudentProfileResponse.builder()
                .studentId(student.getStudentId())
                .name(student.getFirstName() + " " + student.getLastName())
                .nativeCountry(student.getNationality())
                .email(student.getStudentEmail())
                .pathway("Canada") // placeholder — can be dynamically updated later
                .build();


    }
}
