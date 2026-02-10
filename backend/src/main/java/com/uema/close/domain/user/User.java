package com.uema.close.domain.user;

import com.uema.close.dto.RegisterRequestDTO;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Table(name = "users")
@Entity(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "full_name", nullable = false)
    private String name;

    @Column(name = "name")
    private String simpleName;

    private String email;
    private String password;
    private Integer age;
    private String occupation;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    public User(RegisterRequestDTO data, String encryptedPassword) {
        this.name = data.name();
        this.simpleName = data.name();
        this.email = data.email();
        this.password = encryptedPassword;
        this.role = data.role() != null ? data.role() : UserRole.USER;
        this.age = data.age();
        this.occupation = data.occupation();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == UserRole.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override public String getUsername() { return email; }
    @Override public boolean isAccountNonExpired() { return true; }
    @Override public boolean isAccountNonLocked() { return true; }
    @Override public boolean isCredentialsNonExpired() { return true; }
    @Override public boolean isEnabled() { return true; }
}