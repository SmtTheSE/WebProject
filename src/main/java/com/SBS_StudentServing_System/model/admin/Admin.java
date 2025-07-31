package com.SBS_StudentServing_System.model.admin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "dim_admin")
@Getter
@Setter
@Builder
public class Admin {
    @Id
    @Column(name = "admin_id", length = 50)
    private String adminId;

    @Column(name = "account_id", length = 50, unique = true)
    private String accountId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private Integer gender;

    @Column(name = "nationality", length = 50)
    private String nationality;

    @Column(name = "jobrole", length = 10)
    private String jobrole;

    @Column(name = "department_id")
    private String departmentId;

}
