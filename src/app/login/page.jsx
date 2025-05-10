"use client"

import styled from "styled-components";

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
`

export default function LoginPage() {
    return(
        <Container>
            <img src="logo.png" alt="" />
        </Container>
    )
}