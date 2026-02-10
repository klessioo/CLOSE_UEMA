import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { Alert, AlertDescription, AlertTitle } from "../ui/Alert";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";

interface AuthModalsProps {
  type: "login" | "register" | "forgot" | null;
  onClose: () => void;
  onSwitch: (type: "login" | "register" | "forgot") => void;
}

export const AuthModals: React.FC<AuthModalsProps> = ({ type, onClose, onSwitch }) => {
  const { login: loginUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Forms
  const { register: regLogin, handleSubmit: subLogin, reset: resetLogin } = useForm();
  const { register: regRegister, handleSubmit: subRegister, reset: resetRegister } = useForm();
  const { register: regForgot, handleSubmit: subForgot, reset: resetForgot } = useForm();

  // Clear messages when modal type changes
  useEffect(() => {
    setError(null);
    setSuccessMsg(null);
    if (!type) {
      resetLogin();
      resetRegister();
      resetForgot();
    }
  }, [type, resetLogin, resetRegister, resetForgot]);

  const handleLogin = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.request("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      loginUser(res.token);
      toast.success("Login realizado com sucesso!");
      onClose();
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      await api.request("/auth/register", {
        method: "POST",
        body: JSON.stringify({ ...data, role: "USER", age: parseInt(data.age) }),
      });
      setSuccessMsg("Cadastro realizado com sucesso! Faça login para continuar.");
      setTimeout(() => {
        onSwitch("login");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Erro ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      await api.request("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setSuccessMsg("Link de recuperação enviado para seu e-mail.");
      setTimeout(() => {
        onSwitch("login");
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Erro na recuperação. Verifique o e-mail informado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={type === "login"} onClose={onClose} title="Bem-vindo de volta">
        <form onSubmit={subLogin(handleLogin)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro de Autenticação</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <Input label="E-mail" type="email" {...regLogin("email", { required: true })} />
          <Input label="Senha" type="password" {...regLogin("password", { required: true })} />
          
          <div className="flex justify-end">
            <button type="button" onClick={() => onSwitch("forgot")} className="text-sm text-purple-600 hover:underline">
              Esqueceu a senha?
            </button>
          </div>

          <Button type="submit" className="w-full" isLoading={loading}>Entrar</Button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Não tem conta? <button type="button" onClick={() => onSwitch("register")} className="text-purple-600 font-semibold hover:underline">Cadastre-se</button>
          </p>
        </form>
      </Modal>

      <Modal isOpen={type === "register"} onClose={onClose} title="Criar conta">
        <form onSubmit={subRegister(handleRegister)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro no Cadastro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {successMsg && (
            <Alert variant="success">
              <AlertTitle>Sucesso!</AlertTitle>
              <AlertDescription>{successMsg}</AlertDescription>
            </Alert>
          )}

          <Input label="Nome completo" {...regRegister("name", { required: true })} />
          <Input label="E-mail" type="email" {...regRegister("email", { required: true })} />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Idade" type="number" {...regRegister("age", { required: true })} />
            <Input label="Ocupação" {...regRegister("occupation", { required: true })} />
          </div>
          <Input label="Senha" type="password" {...regRegister("password", { required: true })} />
          
          <Button type="submit" className="w-full" isLoading={loading}>Criar Conta</Button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Já tem conta? <button type="button" onClick={() => onSwitch("login")} className="text-purple-600 font-semibold hover:underline">Faça login</button>
          </p>
        </form>
      </Modal>

      <Modal isOpen={type === "forgot"} onClose={onClose} title="Recuperar Senha">
        <form onSubmit={subForgot(handleForgot)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {successMsg && (
            <Alert variant="success">
              <AlertTitle>E-mail Enviado</AlertTitle>
              <AlertDescription>{successMsg}</AlertDescription>
            </Alert>
          )}

          <p className="text-sm text-gray-600">Digite seu e-mail para receber um link de redefinição.</p>
          <Input label="E-mail" type="email" {...regForgot("email", { required: true })} />
          
          <Button type="submit" className="w-full" isLoading={loading}>Enviar Link</Button>
          
          <button type="button" onClick={() => onSwitch("login")} className="w-full text-center text-sm text-gray-500 hover:text-purple-600 mt-2">
            Voltar ao login
          </button>
        </form>
      </Modal>
    </>
  );
};
