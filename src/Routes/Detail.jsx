//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

{/* Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico */}
{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}


const Detail = () => {
  
  const { state } = useContext(ContextGlobal);
  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column; 
  `;

  const dentists = state.dentists;
  const params = useParams();
  const id = Number (params.dentistId);
  const dentistSelected =  dentists.find(element => element.id === id );
    
  return (
    <Container>
      <td>
        <th> Datos del Odontologo seleccionado </th>
        <tr> Nombre: {...dentistSelected.name}</tr>
        <tr> Usuario: {...dentistSelected.username}</tr>
        <tr> Email: {...dentistSelected.email}</tr>
        <tr> Telefono: {...dentistSelected.phone}</tr>
        <tr> Sitio Web: {...dentistSelected.website}</tr>
      </td>
    </Container>
  );
};

export default Detail;
