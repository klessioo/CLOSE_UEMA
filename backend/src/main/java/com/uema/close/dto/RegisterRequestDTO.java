package com.uema.close.dto;

import com.uema.close.domain.user.UserRole;

public record RegisterRequestDTO(
        String name,
        String email,
        String password,
        UserRole role,
        Integer age,
        String occupation
) {}