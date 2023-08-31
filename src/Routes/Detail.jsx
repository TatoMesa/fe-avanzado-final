//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = useContext(ContextGlobal);
  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
  `;

  const dentists = state.dentists;
  const params = useParams();
  const id = Number (params.dentistId);
  const dentistSelected =  dentists.find(element => element.id === id );
  console.log(dentistSelected)
    
  return (
    <Container>
      <p> Datos del Odontologo seleccionado </p>
      <p> Nombre: {...dentistSelected.name}</p>
      <p> Usuario: {...dentistSelected.username}</p>
      <p> Email: {...dentistSelected.email}</p>
      <p> Telefono: {...dentistSelected.phone}</p>
      <p> Sitio Web: {...dentistSelected.website}</p>
      
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </Container>
  );
};

export default Detail;
