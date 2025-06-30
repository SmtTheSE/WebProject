package com.SBS_StudentServing_System.repository;

import com.SBS_StudentServing_System.model.Account;
import com.SBS_StudentServing_System.model.Deadline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeadlineRepository extends JpaRepository<Deadline , Long> {
    List<Deadline> findByAccount(Account account);
}
