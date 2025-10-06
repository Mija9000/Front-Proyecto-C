export async function getCursos() {
  const response = await fetch('http://localhost:8000/api/cursos');
  if (!response.ok) throw new Error('Error al obtener los cursos');
  return await response.json();
}
