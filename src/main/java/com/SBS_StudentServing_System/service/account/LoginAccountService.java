package com.SBS_StudentServing_System.service.account;

import com.SBS_StudentServing_System.dto.account.LoginAccountCreateDto;
import com.SBS_StudentServing_System.dto.account.LoginAccountDto;
import com.SBS_StudentServing_System.model.account.LoginAccount;
import com.SBS_StudentServing_System.model.student.Student;
import com.SBS_StudentServing_System.repository.student.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class LoginAccountService {
    private final StudentRepository studentRepository;

    public LoginAccountService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public LoginAccountDto getAccount(String accountId){
        Optional<Student> studentOpt = studentRepository.findByLoginAccount_AccountId(accountId);
        if(studentOpt.isEmpty()) return null;
        LoginAccount acc = studentOpt.get().getLoginAccount();
        return toDto(acc);
    }

    @Transactional
    public LoginAccountDto createAccount(LoginAccountCreateDto dto) {
        LoginAccount account = new LoginAccount();
        account.setAccountId(dto.getAccountId());
        account.setRole(dto.getRole());
        account.setAccountStatus(dto.getAccountStatus());
        account.setCreatedAt(LocalDateTime.now());
        return toDto(account);
    }

    @Transactional
    public LoginAccountDto updateLastLogin(String accountId) {
        Optional<Student> studentOpt = studentRepository.findByLoginAccount_AccountId(accountId);
        if (studentOpt.isPresent()) {
            LoginAccount acc = studentOpt.get().getLoginAccount();
            acc.setLastLoginAt(LocalDateTime.now());
            acc.setUpdatedAt(LocalDateTime.now());
            // Save logic:  may need to save the Student or LoginAccount via StudentRepository
            // This is a placeholder; will implement saving mechanism as needed.
            return toDto(acc);
        }
        return null;
    }
    private LoginAccountDto toDto(LoginAccount acc){
        LoginAccountDto dto = new LoginAccountDto();
        dto.setAccountId(acc.getAccountId());
        dto.setRole(acc.getRole());
        dto.setAccountStatus(acc.getAccountStatus());
        dto.setCreatedAt(acc.getCreatedAt());
        dto.setUpdatedAt(acc.getUpdatedAt());
        dto.setLastLoginAt(acc.getLastLoginAt());
        return dto;
    }
}