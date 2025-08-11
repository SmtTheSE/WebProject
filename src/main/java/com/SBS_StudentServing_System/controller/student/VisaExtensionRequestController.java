package com.SBS_StudentServing_System.controller.student;

import com.SBS_StudentServing_System.dto.studentinfo.VisaExtensionRequestDto;
import com.SBS_StudentServing_System.service.studentinfo.VisaExtensionRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visa-extension-requests")
public class VisaExtensionRequestController {

    @Autowired
    private VisaExtensionRequestService visaExtensionRequestService;

    @GetMapping
    public List<VisaExtensionRequestDto> getAll() {
        return visaExtensionRequestService.getAll();
    }

    @GetMapping("/student/{studentId}")
    public List<VisaExtensionRequestDto> getByStudentId(@PathVariable String studentId) {
        return visaExtensionRequestService.getByStudentId(studentId);
    }

    @PostMapping
    public ResponseEntity<VisaExtensionRequestDto> create(@RequestBody VisaExtensionRequestDto dto) {
        return ResponseEntity.ok(visaExtensionRequestService.save(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VisaExtensionRequestDto> update(@PathVariable String id, @RequestBody VisaExtensionRequestDto dto) {
        dto.setExtensionRequestId(id);
        return ResponseEntity.ok(visaExtensionRequestService.save(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        visaExtensionRequestService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
