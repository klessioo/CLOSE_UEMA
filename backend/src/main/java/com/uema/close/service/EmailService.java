package com.uema.close.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    // Injeta a URL do frontend definida no application.properties
    @Value("${app.frontend.url}")
    private String frontendUrl;

    public void sendRecoveryEmail(String to, String token) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom(senderEmail);
            message.setTo(to);
            message.setSubject("Recuperação de Senha - Plataforma CLOSE");

            // Agora o link é montado dinamicamente
            // Usamos o frontendUrl do properties + o parâmetro de token
            String recoveryLink = frontendUrl + "/?token=" + token;

            message.setText("Olá!\n\nVocê solicitou a recuperação de senha na plataforma CLOSE.\n" +
                    "Clique no link abaixo para criar uma nova senha:\n\n" +
                    recoveryLink + "\n\n" +
                    "Este link é temporário. Se não foi você, ignore este e-mail.");

            mailSender.send(message);

            System.out.println("=> SUCESSO: E-mail de recuperação enviado para " + to);

        } catch (Exception e) {
            System.err.println("=> ERRO SMTP DETECTADO:");
            System.err.println("Causa: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void sendWelcomeEmail(String to, String name) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(senderEmail);
            message.setTo(to);
            message.setSubject("Bem-vindo à Plataforma CLOSE!");
            message.setText("Olá, " + name + "!\nSeu cadastro foi realizado com sucesso.");
            mailSender.send(message);
        } catch (Exception e) {
            System.err.println("=> ERRO NO ENVIO DE BOAS-VINDAS: " + e.getMessage());
        }
    }
}