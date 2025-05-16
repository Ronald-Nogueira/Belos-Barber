"use client";

import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-left: 50px;
`

export default function SignupPage() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        try {
            const formData = { ...data }
            await axios.post('http://localhost:3000/clientes', formData)
        } catch (error) {
            console.error('Erro ao enviar os dados: ', error)
        }
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>Faça seu cadastro!</H1>
        <CheckBoxContainer>
            <Checkbox name="Cliente" value="sim"/>
            <Checkbox name="Barbeiro" value="sim"/>
        </CheckBoxContainer>
        <Input placeholder="Nome" {...register("Nome")} />
        <Input placeholder="E-mail" {...register("Email")}/>
        <Input placeholder="Telefone" {...register("Telefone")} />
        <Input placeholder="Senha" type="password" {...register("Senha")} />
        <Button type="submit">Cadastrar</Button>
        <H3>Já é cadastrado? Faça o login</H3>
      </Form>
    </Container>
  );
}
