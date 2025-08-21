package com.SBS_StudentServing_System.model.usefulinfo;

import com.SBS_StudentServing_System.model.admin.Admin;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "dim_transfer_program")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class TransferProgram {
    @Id
    @Column(name = "transferProgram_id" , length = 15)
    private String transferProgramId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_id" , referencedColumnName = "admin_id" , nullable = false)
    private Admin admin;

    @Column(name = "createdAt" , nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updatedAt" , nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "transferCountry" , length = 100 , nullable = false)
    private String transferCountry;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partnerInstitution_id" , referencedColumnName = "partnerInstitution_id" , nullable = false)
    private PartnerInstitution partnerInstitution;
}
