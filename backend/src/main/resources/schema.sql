-- Criação da Tabela de Usuários (Padrão PostgreSQL)
CREATE TABLE IF NOT EXISTS users (
                                     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    full_name VARCHAR(255),
    age INTEGER,
    occupation VARCHAR(100),
    role VARCHAR(20) DEFAULT 'USER'
    );

-- Índices para performance em buscas por e-mail
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);