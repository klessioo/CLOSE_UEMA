export const API_URL = "http://localhost:8080";

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem("close_token");
    
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      // Tenta ler o erro JSON da API, senão retorna texto genérico
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Erro na requisição");
    }

    // Se for 204 (No Content) ou corpo vazio
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  }
};
