package com.SBS_StudentServing_System.controller.account;

import com.SBS_StudentServing_System.dto.account.LoginRequestDto;
import com.SBS_StudentServing_System.dto.account.LoginResponseDto;
import com.SBS_StudentServing_System.model.account.LoginAccount;
import com.SBS_StudentServing_System.model.student.Student;
import com.SBS_StudentServing_System.repository.student.StudentRepository;
import com.SBS_StudentServing_System.service.account.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // LoginRequestDto: { email, password }
    @PostMapping("/login")
    public LoginResponseDto login(@RequestBody LoginRequestDto loginRequest) {
        Student student = studentRepository.findByStudentEmail(loginRequest.getEmail()).orElse(null);
        if (student == null || student.getLoginAccount() == null) {
            throw new RuntimeException("Invalid credentials");
        }
        LoginAccount account = student.getLoginAccount();

        // Check hashed password
        if (account.getPassword() == null ||
                !passwordEncoder.matches(loginRequest.getPassword(), account.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(account.getAccountId(), account.getRole());
        return new LoginResponseDto(token, account.getRole(), account.getAccountId());
    }
}