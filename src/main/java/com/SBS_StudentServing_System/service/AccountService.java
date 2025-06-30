package com.SBS_StudentServing_System.service;


import com.SBS_StudentServing_System.model.Account;
import com.SBS_StudentServing_System.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    public Account authenticate(String email, String password) {
        return accountRepository.findByEmail(email)
                .filter(acc -> passwordEncoder.matches(password, acc.getPassword()))
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));
    }

    public Account getCurrentAccount() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("No authenticated user found");
        }
        String email = authentication.getName(); // Assuming username is email
        return accountRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

}
