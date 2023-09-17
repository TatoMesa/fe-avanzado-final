import { useState } from "react";
import { styled } from "styled-components";

const FormStyled = styled.form`
  width: 35%;
  height: auto;
`;

const Input = styled.input`
  width: 94%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 1.2em;
  border: 1px solid ${(props) => (props.isValid ? "green" : "red")};
  color: ${(props) => (props.isValid ? "green" : "red")};
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button`
  width: 45%;
  color: #eee;
  border-radius: 5px;
  font-size: 1.1em;
  letter-spacing: 1px;
  padding: 3px;
  background-color: ${({ main }) => (main ? "green" : "red")};
`;

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeQuestion = (e) => setQuestion(e.target.value);
  
  const handleCleanUp = () => {
    setName("");
    setEmail("");
    setQuestion("");
  };

  const onSubmitForm = (e) => {
    
    if (name){
      if (emailRegex.test(email)){
        if (question){
          alert(`Gracias ${name}, te contactaremos cuando antes vía mail.`);
          handleCleanUp(e);
        }
        else
          alert(`Por favor ingrese una pregunta`);
      }  
      else
        alert(`El campo de mail debe tener el formato xxxx@xxx.xx`);
    }
    else
      alert(`Por favor ingrese un nombre`)
    e.preventDefault();  
  };

  return (
    <FormStyled id="form_contact" onSubmit={onSubmitForm}>
      <Input
        type="text"
        placeholder="Nombre Completo"
        value={name}
        onChange={onChangeName}
        isValid={name !== ""}
      />
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
        isValid={emailRegex.test(email)}
      />
      <Input
        type="text"
        placeholder="Pregunta"
        value={question}
        onChange={onChangeQuestion}
        isValid={question !== ""}
      />
      <ButtonContainer>
        <Button onClick= {handleCleanUp} type="button">Cancelar</Button>
        <Button form="form_contact" type="submit" main={true}>Enviar</Button>
      </ButtonContainer>
    </FormStyled>
  );
};

export default Form;
