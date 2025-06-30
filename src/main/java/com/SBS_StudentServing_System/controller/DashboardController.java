package com.SBS_StudentServing_System.controller;

import com.SBS_StudentServing_System.model.Account;
import com.SBS_StudentServing_System.model.Announcement;
import com.SBS_StudentServing_System.model.ClassSchedule;
import com.SBS_StudentServing_System.model.Deadline;
import com.SBS_StudentServing_System.repository.AnnouncementRepository;
import com.SBS_StudentServing_System.repository.ClassScheduleRepository;
import com.SBS_StudentServing_System.repository.DeadlineRepository;
import com.SBS_StudentServing_System.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    private final AccountService accountService;
    private final ClassScheduleRepository classScheduleRepo;
    private final DeadlineRepository deadlineRepo;
    private final AnnouncementRepository announcementRepo;

    @GetMapping("/profile")
    public Account getProfile(){
        return accountService.getCurrentAccount();
    }

    @GetMapping("/schedule")
    public List<ClassSchedule> getClassSchedule(){
        return classScheduleRepo.findByAccount(accountService.getCurrentAccount());
    }

    @GetMapping("/deadlines")
    public List<Deadline> getDeadlines() {
        return deadlineRepo.findByAccount(accountService.getCurrentAccount());
    }

    @GetMapping("/announcements")
    public List<Announcement> getAnnouncements() {
        return announcementRepo.findAllByOrderByDateDesc();
    }
}
