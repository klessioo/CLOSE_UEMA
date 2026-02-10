
# Plataforma CLOSE

> **Sistema de Letramento Digital e Inclusão — Universidade Estadual do Maranhão**

A **Plataforma CLOSE** é um ecossistema educacional desenvolvido para a **UEMA - Campus Caxias**. O foco central é criar um ambiente seguro e informativo para o letramento LGBTQIAPN+, permitindo a gestão de conteúdos, cursos e jogos educativos com controle de acesso institucional rigoroso.

---

## 🛠️ Especificações Técnicas

O projeto utiliza uma arquitetura **Full-Stack** desacoplada, garantindo que o processamento de dados e a interface do usuário operem de forma independente e eficiente.

### Camada de Software

| Componente | Tecnologia | Finalidade |
| --- | --- | --- |
| **Interface** | React.js + Vite | Experiência do usuário ágil e reativa. |
| **Linguagem Front** | TypeScript | Segurança de tipos e código escalável. |
| **Estilização** | Tailwind CSS | Design responsivo e interface moderna. |
| **Backend** | Java 17 + Spring Boot 3 | Lógica de negócio e segurança robusta. |
| **Segurança** | Spring Security + JWT | Autenticação e proteção de rotas. |
| **Banco de Dados** | PostgreSQL | Persistência de dados relacional. |
| **Infraestrutura** | Supabase | Hospedagem de banco de dados e API. |

---

## ⚙️ Funcionalidades do Sistema

O sistema foi projetado para oferecer uma experiência personalizada com base no perfil do usuário:

* **Gestão de Identidade:** Cadastro seguro e validação de dados institucionais.
* **Controle de Acesso (RBAC):** * **Módulo Aluno:** Acesso a trilhas de aprendizagem e jogos educativos.
* **Módulo Pesquisador:** Painel administrativo para gestão de conteúdos.


* **Recuperação de Acesso:** Fluxo automático de redefinição de senha via e-mail.
* **Dashboard Adaptativo:** Painel de boas-vindas inteligente com design responsivo para dispositivos móveis e desktop.

---

## 📂 Organização do Repositório

A estrutura de diretórios segue as melhores práticas de organização para projetos modulares:

```text
CLOSE_UEMA/
├── 📂 backend/        # Servidor e API RESTful (Java Spring Boot)
│   ├── src/           # Código-fonte e regras de negócio
│   └── pom.xml        # Gerenciador de dependências Maven
│
└── 📂 frontend/       # Interface de Usuário (React + Vite)
    ├── src/           # Componentes e páginas
    └── package.json   # Dependências e scripts Node.js

```

---

### Como aplicar no GitHub:

1. Copie o código acima.
2. No seu repositório `CLOSE_UEMA`, clique em **Add file** -> **Create new file**.
3. Nomeie como `README.md`.
4. Cole o conteúdo e clique em **Commit changes**.
