import { styled } from "styled-components";
import Card from "../Components/Card.jsx";
import { useContext, useState, useEffect  } from "react";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// Actualizar el estado de las tarjetas almacenadas cuando cambie el localStorage
// este componente debe consumir los destacados del localStorage 
// Deberan renderizar una Card por cada uno de ellos 

const Favs = () => {

  const { state } = useContext(ContextGlobal);
  
  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
  `;

  const storedCards = JSON.parse(localStorage.getItem("featuredDentist"));
 
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (state.sizeLocalStorage === 0) {
      setResponse('No hay dentistas destacados');
    }
    else
      setResponse('Dentistas destacados');
  }, [state.sizeLocalStorage]);

  return (
    <Container>
      <h1> {response } </h1>
      <div className="card-grid">
        {storedCards.map((element, id) => {
          return (
            <Card key={id} {...element}>{" "}    {/* Aqui deberias renderizar las cards */}
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Favs;
