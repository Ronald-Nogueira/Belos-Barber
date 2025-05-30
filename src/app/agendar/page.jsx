"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useAuthContext } from "@/contexts/AuthContext";

import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";
import Select from "@/components/form/Select";
import Confirmed from "@/components/confirmed/Confirmed";

const Container = styled.div`
  height: 100vh;
  width: 100vw;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: linear-gradient(
    to bottom, 
    #FF9B00,   /* laranja claro */
    #FF7000  /* laranja mais escuro */
  );
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 50px;
  background-color: #1E1D1D;
  padding: 50px 100px;
  border-radius: 20px;
`;


export default function AgendamentoForm() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [profissionais, setProfissionais] = useState([]);
  const [idProfissional, setIdProfissional] = useState("");
  const [status, setStatus] = useState("pendente");
  const [mensagem, setMensagem] = useState("");

  const { token } = useAuthContext();

  useEffect(() => {
    // Buscar profissionais disponíveis
    const fetchProfissionais = async () => {
      try {
        const response = await axios.get("http://localhost:3001/profissionais");
        setProfissionais(response.data);
      } catch (error) {
        console.error("Erro ao buscar profissionais:", error);
      }
    };

    fetchProfissionais();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3001/agendamentos",
        {
          Data: data,
          Hora: hora,
          Status: status,
          ID_Profissional: idProfissional,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem("Agendamento criado com sucesso!");
      setData("");
      setHora("");
      setIdProfissional("");
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      setMensagem("Erro ao criar agendamento");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <H1>Faça seu agendamento!</H1>
        <Input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <Input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        <Select
          value={idProfissional}
          onChange={(e) => setIdProfissional(e.target.value)}
        >
          <option value="">Selecione um profissional</option>
          {profissionais.map((prof) => (
            <option key={prof.ID_Profissional} value={prof.ID_Profissional}>
              {prof.Nome}
            </option>
          ))}
        </Select>
        <Button type="submit">Agendar</Button>
      </Form>
      {mensagem && <Confirmed/>}
    </Container>
  );
}
