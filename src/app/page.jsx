'use client';

import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { usuario } = useAuth();

  // Evita exibir conteúdo até verificar o usuário
  if (!usuario) return <p>Carregando...</p>;
  console.log(usuario.usuario.Nome)
  return (
    <div>
      <h1>Bem-vindo, {usuario.usuario.Nome}!</h1>
    </div>
  );
}
