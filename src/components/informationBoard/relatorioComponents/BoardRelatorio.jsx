import styled from "styled-components";

import Menu from "../Menu";
import H3 from "@/components/typography/H3";
import Select from "@/components/form/Select";
import Button from "@/components/form/Button";

const Container = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #1e1d1d;
  border-radius: 20px;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: bold;
  color: #e0e0e0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 20px 30px;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
`;

const RelatorioContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  width: 70%;
  padding: 20px 20px 150px 20px;
  border-radius: 10px;
  gap: 20px;
`;

const InfoRelatorio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Data = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1d1d;
  padding: 10px 0;
  width: 130px;
  font-size: 20px;
  border-radius: 10px;
  color: #949494;
`;

const ServicesRequest = styled.div`
    display: flex;
    gap: 20px;
`

export default function BoardRelatorio({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <H3>Escolha a frequencia do relatório!</H3>
        <Form>
          <Select>
            <option value="">mensal</option>
            <option value="">semanal</option>
          </Select>
          <Button>Gerar</Button>
        </Form>
        <RelatorioContainer>
          <InfoRelatorio>
            <H3>Faturamento Total</H3>
            <Data>R$ 35.00</Data>
          </InfoRelatorio>
          <InfoRelatorio>
            <H3>Total de Agendamentos</H3>
            <Data>4</Data>
          </InfoRelatorio>
          <H3>Quantidade de servicos requisitados!</H3>
          <ServicesRequest>
            <Data>Cabelo</Data>
            <Data>Barba</Data>
          </ServicesRequest>
        </RelatorioContainer>
      </Content>
      <Menu page={title} />
    </Container>
  );
}
