import styled from "styled-components";

import ServicesInformation from "./Horarios";
import Input from "../form/Input";
import Menu from "./Menu";

const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #1E1D1D;
  border-radius: 20px;
  gap: 20px;
`;

const Title = styled.h2`
    font-size: 27px;
    font-weight: bold;
    color: #E0E0E0;
`

const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 50px;
    flex-grow: 1;
`

export default function InformationBoard({ title, page }) {
    return(
        <Container>
            <Title>{title}</Title>
            <Input type="date"/>
            <ServicesContainer>
                <ServicesInformation/>
                <ServicesInformation/>
                <ServicesInformation/>
            </ServicesContainer>
            <Menu page={title}/>
        </Container>
    )
}