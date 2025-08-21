package com.SBS_StudentServing_System.model.usefulinfo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "subdim_partnerInstitute")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Getter
@Setter
public class PartnerInstitution {
    @Id
    @Column(name = "partnerInstitution_id" , length = 15)
    private String partnerInstitutionId;

    @Column(name = "institutionName" , length = 255 , nullable = false)
    private String institutionName;

    @Column(name = "websiteUrl" , length = 255)
    private String websiteUrl;

    @Column(name = "email" , length = 100)
    private String email;

}
