package com.SBS_StudentServing_System.config;

import com.SBS_StudentServing_System.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
@RequiredArgsConstructor
public class UserDetailsServiceConfig {
    private final AccountRepository accountRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return email -> accountRepository.findByEmail(email)
                .map(acc -> User.withUsername(acc.getEmail())
                        .password(acc.getPassword())
                        .roles("USER")
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
