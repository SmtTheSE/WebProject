package com.SBS_StudentServing_System.service.academic;

import com.SBS_StudentServing_System.dto.academic.ClassScheduleDto;
import com.SBS_StudentServing_System.dto.academic.ClassTimelineDto;
import com.SBS_StudentServing_System.model.academic.*;
import com.SBS_StudentServing_System.repository.academic.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class AcademicService {
    @Autowired
    public StudentAcademicBackgroundRepository studentAcademicBackgroundRepo;
    @Autowired public StudentEnglishPlacementTestRepository studentEnglishPlacementTestRepo;
    @Autowired public StudyPlanRepository studyPlanRepo;
    @Autowired public StudyPlanCourseRepository studyPlanCourseRepo;
    @Autowired public GradeRepository gradeRepo;
    @Autowired public ClassScheduleRepository classScheduleRepo;
    @Autowired public CourseRepository courseRepo;
    @Autowired public SemesterRepository semesterRepo;
    @Autowired public DepartmentRepository departmentRepo;
    @Autowired public TranscriptRequestRepository transcriptRequestRepo;
    @Autowired public StudentEnrollmentRepository studentEnrollmentRepo;
    @Autowired public AttendanceSummaryRepository attendanceSummaryRepo;
    @Autowired public CourseResultRepository courseResultRepo;
    @Autowired public StudentProgressSummaryRepository studentProgressSummaryRepo;
    @Autowired public Transcript_Issue_Repository transcript_Issue_request_Repo;
    @Autowired public LecturerCourseRepository lecturerCourseRepo;

    // --- StudentAcademicBackground ---
    public List<StudentAcademicBackground> getAllStudentAcademicBackgrounds() {
        return studentAcademicBackgroundRepo.findAll();
    }
    public Optional<StudentAcademicBackground> getStudentAcademicBackground(String id) {
        return studentAcademicBackgroundRepo.findById(id);
    }
    public StudentAcademicBackground saveStudentAcademicBackground(StudentAcademicBackground entity) {
        return studentAcademicBackgroundRepo.save(entity);
    }
    public void deleteStudentAcademicBackground(String id) {
        studentAcademicBackgroundRepo.deleteById(id);
    }

    // --- StudentEnglishPlacementTest ---
    public List<StudentEnglishPlacementTest> getAllStudentEnglishPlacementTests() {
        return studentEnglishPlacementTestRepo.findAll();
    }
    public Optional<StudentEnglishPlacementTest> getStudentEnglishPlacementTest(String id) {
        return studentEnglishPlacementTestRepo.findById(id);
    }
    public StudentEnglishPlacementTest saveStudentEnglishPlacementTest(StudentEnglishPlacementTest entity) {
        return studentEnglishPlacementTestRepo.save(entity);
    }
    public void deleteStudentEnglishPlacementTest(String id) {
        studentEnglishPlacementTestRepo.deleteById(id);
    }

    // --- StudyPlan ---
    public List<StudyPlan> getAllStudyPlans() {
        return studyPlanRepo.findAll();
    }
    public Optional<StudyPlan> getStudyPlan(String id) {
        return studyPlanRepo.findById(id);
    }
    public StudyPlan saveStudyPlan(StudyPlan entity) {
        return studyPlanRepo.save(entity);
    }
    public void deleteStudyPlan(String id) {
        studyPlanRepo.deleteById(id);
    }

    // --- StudyPlanCourse ---
    public List<StudyPlanCourse> getAllStudyPlanCourses() {
        return studyPlanCourseRepo.findAll();
    }
    public Optional<StudyPlanCourse> getStudyPlanCourse(String id) {
        return studyPlanCourseRepo.findById(id);
    }
    public StudyPlanCourse saveStudyPlanCourse(StudyPlanCourse entity) {
        return studyPlanCourseRepo.save(entity);
    }
    public void deleteStudyPlanCourse(String id) {
        studyPlanCourseRepo.deleteById(id);
    }

    // --- Grade ---
    public List<Grade> getAllGrades() {
        return gradeRepo.findAll();
    }
    public Optional<Grade> getGrade(String id) {
        return gradeRepo.findById(id);
    }
    public Grade saveGrade(Grade entity) {
        return gradeRepo.save(entity);
    }
    public void deleteGrade(String id) {
        gradeRepo.deleteById(id);
    }

    // --- ClassSchedule ---
    public List<ClassSchedule> getAllClassSchedules() {
        return classScheduleRepo.findAll();
    }
    public Optional<ClassSchedule> getClassSchedule(String id) {
        return classScheduleRepo.findById(id);
    }
    public ClassSchedule saveClassSchedule(ClassSchedule entity) {
        return classScheduleRepo.save(entity);
    }
    public void deleteClassSchedule(String id) {
        classScheduleRepo.deleteById(id);
    }

    // --- Course ---
    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }
    public List<ClassTimelineDto> getClassTimelinesByStudentId(String studentId) {
        return classScheduleRepo.findClassTimelinesByStudentId(studentId);
    }


    public Integer getTotalCreditsEarnedByStudentId(String studentId) {
        return courseResultRepo.getTotalCreditsEarnedByStudentId(studentId);
    }

    public Optional<Course> getCourse(String id) {
        return courseRepo.findById(id);
    }
    public Course saveCourse(Course entity) {
        return courseRepo.save(entity);
    }
    public void deleteCourse(String id) {
        courseRepo.deleteById(id);
    }

    // --- Semester ---
    public List<Semester> getAllSemesters() {
        return semesterRepo.findAll();
    }
    public Optional<Semester> getSemester(String id) {
        return semesterRepo.findById(id);
    }
    public Semester saveSemester(Semester entity) {
        return semesterRepo.save(entity);
    }
    public void deleteSemester(String id) {
        semesterRepo.deleteById(id);
    }

    // --- Department ---
    public List<Department> getAllDepartments() {
        return departmentRepo.findAll();
    }
    public Optional<Department> getDepartment(String id) {
        return departmentRepo.findById(id);
    }
    public Department saveDepartment(Department entity) {
        return departmentRepo.save(entity);
    }
    public void deleteDepartment(String id) {
        departmentRepo.deleteById(id);
    }

    // --- TranscriptRequest ---
    public List<TranscriptRequest> getAllTranscriptRequests() {
        return transcriptRequestRepo.findAll();
    }
    public Optional<TranscriptRequest> getTranscriptRequest(String id) {
        return transcriptRequestRepo.findById(id);
    }
    public TranscriptRequest saveTranscriptRequest(TranscriptRequest entity) {
        return transcriptRequestRepo.save(entity);
    }
    public void deleteTranscriptRequest(String id) {
        transcriptRequestRepo.deleteById(id);
    }

    // --- StudentEnrollment ---
    public List<StudentEnrollment> getAllStudentEnrollments() {
        return studentEnrollmentRepo.findAll();
    }
    public Optional<StudentEnrollment> getStudentEnrollment(Long id) {
        return studentEnrollmentRepo.findById(id);
    }
    public StudentEnrollment saveStudentEnrollment(StudentEnrollment entity) {
        return studentEnrollmentRepo.save(entity);
    }
    public void deleteStudentEnrollment(Long id) {
        studentEnrollmentRepo.deleteById(id);
    }

    // --- AttendanceSummary ---
    public List<AttendanceSummary> getAllAttendanceSummaries() {
        return attendanceSummaryRepo.findAll();
    }
    public Optional<AttendanceSummary> getAttendanceSummary(Long id) {
        return attendanceSummaryRepo.findById(id);
    }
    public AttendanceSummary saveAttendanceSummary(AttendanceSummary entity) {
        return attendanceSummaryRepo.save(entity);
    }
    public void deleteAttendanceSummary(Long id) {
        attendanceSummaryRepo.deleteById(id);
    }

    // --- CourseResult ---
    public List<CourseResult> getAllCourseResults() {
        return courseResultRepo.findAll();
    }
    public Optional<CourseResult> getCourseResult(Long id) {
        return courseResultRepo.findById(id);
    }
    public CourseResult saveCourseResult(CourseResult entity) {
        return courseResultRepo.save(entity);
    }
    public void deleteCourseResult(Long id) {
        courseResultRepo.deleteById(id);
    }

    // --- StudentProgressSummary ---
    public List<StudentProgressSummary> getAllStudentProgressSummaries() {
        return studentProgressSummaryRepo.findAll();
    }
    public Optional<StudentProgressSummary> getStudentProgressSummary(Long id) {
        return studentProgressSummaryRepo.findById(id);
    }
    public StudentProgressSummary saveStudentProgressSummary(StudentProgressSummary entity) {
        return studentProgressSummaryRepo.save(entity);
    }
    public void deleteStudentProgressSummary(Long id) {
        studentProgressSummaryRepo.deleteById(id);
    }

    // --- Transcript_IssueRequest ---
    public List<TranscriptIssueRequest> getAllTranscript_Issue_request() {
        return transcript_Issue_request_Repo.findAll();
    }
    public Optional<TranscriptIssueRequest> getTranscript_Issue_request(Long id) {
        return transcript_Issue_request_Repo.findById(id);
    }
    public TranscriptIssueRequest saveTranscript_Issue_request(TranscriptIssueRequest entity) {
        return transcript_Issue_request_Repo.save(entity);
    }
    public void deleteTranscript_Issue_request(Long id) {
        transcript_Issue_request_Repo.deleteById(id);
    }

    // --- LecturerCourse ---
    public List<LecturerCourse> getAllLecturerCourses() {
        return lecturerCourseRepo.findAll();
    }
    public Optional<LecturerCourse> getLecturerCourse(Long id) {
        return lecturerCourseRepo.findById(id);
    }
    public LecturerCourse saveLecturerCourse(LecturerCourse entity) {
        return lecturerCourseRepo.save(entity);
    }
    public void deleteLecturerCourse(Long id) {
        lecturerCourseRepo.deleteById(id);
    }
}
