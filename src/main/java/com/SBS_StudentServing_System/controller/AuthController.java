package com.SBS_StudentServing_System.controller;

import com.SBS_StudentServing_System.dto.AuthRequest;
import com.SBS_StudentServing_System.dto.AuthResponse;
import com.SBS_StudentServing_System.model.Account;
import com.SBS_StudentServing_System.security.JwtUtil;
import com.SBS_StudentServing_System.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AccountService accountService;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest req) {
        Account account = accountService.authenticate(req.email(), req.password());
        String token = jwtUtil.generateToken(account);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
