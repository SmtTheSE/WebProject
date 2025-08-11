package com.SBS_StudentServing_System.model.academic;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "dim_studyPlanCourse")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyPlanCourse {
    @Id
    @Column(name = "study_plan_course_id", length = 15)
    private String studyPlanCourseId;

    @ManyToOne
    @JoinColumn(name = "study_plan_id", nullable = false)
    private StudyPlan studyPlan;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @ManyToOne
    @JoinColumn(name = "semester_id", nullable = false)
    private Semester semester;

    @Column(name = "assignment_deadline")
    private LocalDate assignmentDeadline;
}