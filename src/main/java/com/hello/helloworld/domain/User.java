package com.hello.helloworld.domain;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String username;
    private String password;
    @Column(nullable = false)
    private String email;
    private String role;

    private String provider;
    private String providerId;

    @CreationTimestamp
    private Timestamp createDate;

    @Builder
    public User(int id, String username, String password, String email, String role, String provider, String providerId, Timestamp createDate) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.provider = provider;
        this.providerId = providerId;
        this.createDate = createDate;
    }
}
