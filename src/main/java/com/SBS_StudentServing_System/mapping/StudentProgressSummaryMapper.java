package com.SBS_StudentServing_System.mapping;

import com.SBS_StudentServing_System.dto.academic.StudentProgressSummaryDto;
import com.SBS_StudentServing_System.model.academic.StudentProgressSummary;
import com.SBS_StudentServing_System.model.academic.StudyPlanCourse;
import com.SBS_StudentServing_System.model.student.Student;

public class StudentProgressSummaryMapper {
    public static StudentProgressSummaryDto toDto(StudentProgressSummary entity) {
        StudentProgressSummaryDto dto = new StudentProgressSummaryDto();
        dto.setId(entity.getId());
        dto.setStudentId(entity.getStudent() != null ? entity.getStudent().getStudentId() : null);
        dto.setStudyPlanCourseId(entity.getStudyPlanCourse() != null ? entity.getStudyPlanCourse().getStudyPlanCourseId() : null);
        dto.setTotalEnrolledCourse(entity.getTotalEnrolledCourse());
        dto.setTotalCompletedCourse(entity.getTotalCompletedCourse());
        dto.setTotalCreditsEarned(entity.getTotalCreditsEarned());
        return dto;
    }

    public static StudentProgressSummary toEntity(StudentProgressSummaryDto dto, Student student, StudyPlanCourse studyPlanCourse) {
        return StudentProgressSummary.builder()
                .id(dto.getId())
                .student(student)
                .studyPlanCourse(studyPlanCourse)
                .totalEnrolledCourse(dto.getTotalEnrolledCourse())
                .totalCompletedCourse(dto.getTotalCompletedCourse())
                .totalCreditsEarned(dto.getTotalCreditsEarned())
                .build();
    }
}
