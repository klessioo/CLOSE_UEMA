Plataforma CLOSE - Sistema de Letramento LGBTQIAPN+
Este repositório contém o código-fonte da Plataforma CLOSE, uma iniciativa desenvolvida para a Universidade Estadual do Maranhão (UEMA) - Campus Caxias. O sistema foi projetado para servir como um Ambiente Virtual de Aprendizagem (AVA) focado em diversidade, inclusão e direitos humanos no Estado do Maranhão.

Estrutura do Projeto
O projeto utiliza uma arquitetura desacoplada dividida em duas frentes principais:

Backend: API RESTful desenvolvida em Java com o framework Spring Boot.

Frontend: Interface de usuário desenvolvida em React com TypeScript.

Tecnologias Utilizadas
Backend
Linguagem: Java 21.

Framework: Spring Boot 3.

Segurança: Spring Security com autenticação baseada em tokens JWT.

Banco de Dados: PostgreSQL.

Gerenciamento de Dependências: Maven.

Frontend
Biblioteca: React.

Linguagem: TypeScript.

Ferramenta de Build: Vite.

Estilização: Tailwind CSS.

Animações: Framer Motion.

Funcionalidades Implementadas
Sistema de autenticação e controle de acesso para usuários.

Fluxo de recuperação e redefinição de senha com integração via e-mail.

Gestão de dados de perfil para alunos e pesquisadores.

Interface administrativa para controle da estrutura pedagógica.

Instruções de Instalação e Execução
Pré-requisitos
Java Development Kit (JDK) 17 ou superior instalado.

Node.js e npm instalados.

Instância do banco de dados PostgreSQL configurada.

Execução do Backend
Navegue até o diretório backend.

Configure as variáveis de ambiente necessárias (URL do banco, credenciais de e-mail e segredo JWT) no arquivo application.properties.

Execute o comando: ./mvnw spring-boot:run.

Execução do Frontend
Navegue até o diretório frontend.

Execute o comando: npm install para instalar as dependências.

Execute o comando: npm run dev para iniciar o ambiente de desenvolvimento.
