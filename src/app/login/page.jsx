"use client"

import styled from "styled-components";

import Input from "@/components/form/Input";
import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";
import Button from "@/components/form/Button";

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
    margin-right: 170px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
`

export default function LoginPage() {
    return(
        <Container>
            <img src="logo.png" alt="" />
            <Form>
                <StyleH1>Faça Login!</StyleH1>
                <Input placeholder="Usuário"/>
                <Input placeholder="Senha"/>
                <TextContainer>
                    <H3>Ainda não é cadastrado?</H3>
                    <H3 color="#FF7000">Cadastre-se</H3>
                </TextContainer>
                <Button>Login</Button>
            </Form>
        </Container>
    )
}