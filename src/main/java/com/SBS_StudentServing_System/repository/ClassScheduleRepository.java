package com.SBS_StudentServing_System.repository;

import com.SBS_StudentServing_System.model.Account;
import com.SBS_StudentServing_System.model.ClassSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassScheduleRepository  extends JpaRepository<ClassSchedule , Long> {
    List<ClassSchedule> findByAccount(Account account);
}
