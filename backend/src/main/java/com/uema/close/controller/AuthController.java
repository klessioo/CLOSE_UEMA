package com.uema.close.controller;

import com.uema.close.domain.user.User;
import com.uema.close.dto.*;
import com.uema.close.infra.security.TokenService;
import com.uema.close.repository.UserRepository;
import com.uema.close.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value; // Import necessário
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
// Lê a URL do frontend do properties para permitir o acesso dinamicamente
@CrossOrigin(origins = "${app.frontend.url}")
public class AuthController {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;
    private final EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO body){
        // Busca o usuário e garante que o retorno seja JSON em caso de erro
        User user = (User) this.repository.findByEmail(body.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if(passwordEncoder.matches(body.password(), user.getPassword())) {
            String token = this.tokenService.generateToken(user);
            return ResponseEntity.ok(new LoginResponseDTO(user.getName(), token));
        }

        return ResponseEntity.status(401).body(Map.of("message", "Credenciais inválidas"));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO data){
        if(this.repository.findByEmail(data.email()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "E-mail já cadastrado"));
        }

        String encryptedPassword = passwordEncoder.encode(data.password());
        User newUser = new User(data, encryptedPassword);

        this.repository.save(newUser);
        this.emailService.sendWelcomeEmail(newUser.getEmail(), newUser.getName());

        String token = this.tokenService.generateToken(newUser);
        return ResponseEntity.ok(new LoginResponseDTO(newUser.getName(), token));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity forgotPassword(@RequestBody ForgotPasswordDTO data) {
        try {
            Optional<UserDetails> userDetailsOptional = this.repository.findByEmail(data.email());

            if (userDetailsOptional.isEmpty()) {
                return ResponseEntity.status(404).body(Map.of("message", "E-mail não encontrado."));
            }

            User user = (User) userDetailsOptional.get();
            String recoveryToken = tokenService.generateToken(user);
            this.emailService.sendRecoveryEmail(user.getEmail(), recoveryToken);

            return ResponseEntity.ok().body(Map.of("message", "E-mail de recuperação enviado com sucesso!"));

        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro interno ao processar recuperação."));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity resetPassword(@RequestBody ResetPasswordDTO data) {
        try {
            // Valida o token JWT recebido no corpo da requisição
            String email = tokenService.validateToken(data.token());

            if (email == null || email.isEmpty()) {
                return ResponseEntity.status(403).body(Map.of("message", "Link inválido ou expirado."));
            }

            User user = (User) repository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

            // Atualiza a senha com criptografia BCrypt
            user.setPassword(passwordEncoder.encode(data.newPassword()));
            repository.save(user);

            return ResponseEntity.ok().body(Map.of("message", "Senha atualizada com sucesso!"));

        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Erro ao redefinir senha: " + e.getMessage()));
        }
    }
}