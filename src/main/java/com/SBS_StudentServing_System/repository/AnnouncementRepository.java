package com.SBS_StudentServing_System.repository;

import com.SBS_StudentServing_System.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnnouncementRepository extends JpaRepository<Announcement , Long> {
    List<Announcement> findAllByOrderByDateDesc();
}
