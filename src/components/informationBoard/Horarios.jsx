import styled from "styled-components";
import { CalendarIcon } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
    width: 70%;
    height: 70px;
    background-color: #404040;
    border-radius: 10px;
    display: flex;
    align-items: center;
`

const ServiceAndTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const Client = styled.h2`
    font-size: 25px;
    font-weight: bold;
    color: #949494;
`

const Time = styled.p`
    color: #949494;
    font-size: 20px;
    font-weight: bold;
`

export default function Horarios({ cliente, horario }) {
  if (!cliente || !horario) return null;

  return (
    <Container>
      <CalendarIcon size={50} weight="fill" color="#FF7000" />
      <ServiceAndTime>
        <Client>{cliente}</Client>
        <Time>{horario}</Time>
      </ServiceAndTime>
    </Container>
  );
}