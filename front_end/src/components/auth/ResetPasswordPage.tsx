import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api"; // Verifique se o caminho da sua API está correto
import { toast } from "sonner";
import { Lock } from "lucide-react";

interface Props {
  token: string;
  onSuccess: () => void;
}

export const ResetPasswordPage = ({ token, onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    if (data.password !== data.confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      // Chama o endpoint que criamos acima no Java
      await api.request("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, newPassword: data.password }),
      });
      
      toast.success("Senha alterada com sucesso!");
      onSuccess();
    } catch (err: any) {
      toast.error("Erro ao redefinir senha.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
            <Lock size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Criar Nova Senha</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input 
            type="password" 
            placeholder="Nova Senha"
            className="w-full p-3 border rounded-lg"
            {...register("password", { required: true, minLength: 6 })}
          />
          <input 
            type="password" 
            placeholder="Confirmar Nova Senha"
            className="w-full p-3 border rounded-lg"
            {...register("confirmPassword", { required: true })}
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-purple-300"
          >
            {loading ? "Salvando..." : "Redefinir Senha"}
          </button>
        </form>
      </div>
    </div>
  );
};