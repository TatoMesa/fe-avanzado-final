import { styled } from "styled-components";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context"
import  Form  from "../Components/Form"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

const { state } = useContext(ContextGlobal);
const StyledDiv = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 15px; 
    padding-bottom: 15px; 
`;

  return (
    <StyledDiv>
      <h2>¿Queres saber más?</h2>
      <h3>Envíanos tu pregunta y nos pondremos en contacto via mail</h3>
      <Form />
    </StyledDiv>
  );
};

export default Contact;
