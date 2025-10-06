// src/api.ts
const API_URL = import.meta.env.VITE_API_URL || "http://3.82.20.249:3001/api";

export async function obtenerCursos() {
  const response = await fetch(`${API_URL}/cursos`);
  if (!response.ok) throw new Error("Error al obtener cursos");
  
  // 👇 El backend devuelve { success: true, data: [...] }
  const result = await response.json();
  return result.data;
}

export async function crearCurso(curso: any) {
  const response = await fetch(`${API_URL}/cursos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(curso),
  });
  if (!response.ok) throw new Error("Error al crear curso");
  
  const result = await response.json();
  return result.data;
}

