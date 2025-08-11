package com.SBS_StudentServing_System.repository.admin;

import com.SBS_StudentServing_System.model.admin.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, String> {
    Admin findByAccountId(String accountId);
}
