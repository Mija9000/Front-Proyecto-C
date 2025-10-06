// src/componente/CursoList.tsx
import React, { useEffect, useState } from "react";
import { obtenerCursos } from "../services/api";

interface Curso {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  area: string;
  estado: string;
}

const CursoList: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await obtenerCursos();
        setCursos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCursos();
  }, []);

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Cursos</h2>
      {cursos.length === 0 ? (
        <p>No hay cursos registrados.</p>
      ) : (
        <ul>
          {cursos.map((curso) => (
            <li key={curso.id}>
              <strong>{curso.nombre}</strong> ({curso.codigo}) - {curso.area}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CursoList;
