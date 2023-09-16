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
    padding: 0.5rem;
  `;
  

  return (
    <StyledDiv>
      <h2>¿Quiere saber más?</h2>
      <h3>Envíanos tus preguntas y nos pondremos en contacto contigo</h3>
      <Form />
    </StyledDiv>
  );
};

export default Contact;
