"use client"

import styled from "styled-components";

import Input from "@/components/form/Input";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";
import Button from "@/components/form/Button";
import Checkbox from "@/components/form/Checkbox";

const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

const StyleH1 = styled(H1)`
    margin-left: 10px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 150px;
`

const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-left: 50px;
`

export default function SignupPage() {
    return (
        <Container>
            <Form>
                <StyleH1>Faça seu cadastro!</StyleH1>
                <CheckBoxContainer>
                    <Checkbox name="Cliente" value="sim"/>
                    <Checkbox name="Barbeiro" value="sim"/>
                </CheckBoxContainer>
                <Input placeholder="Usuário"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <TextContainer>
                    <H3>Já é cadastrado?</H3>
                    <H3 color="#FF7000">Faça o login</H3>
                </TextContainer>
                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}