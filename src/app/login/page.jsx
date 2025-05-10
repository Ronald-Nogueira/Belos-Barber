"use client"

import styled from "styled-components";

import Input from "@/components/form/Input";

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
`

export default function LoginPage() {
    return(
        <Container>
            <img src="logo.png" alt="" />
            <Form>
                <Input placeholder="Usuario"/>
            </Form>
        </Container>
    )
}