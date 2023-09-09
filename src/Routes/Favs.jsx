import { styled } from "styled-components";
import Card from "../Components/Card.jsx";
import { useContext, useEffect, useState } from "react";
import {ContextGlobal} from "../Components/utils/global.context.jsx";  


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// Actualizar el estado de las tarjetas almacenadas cuando cambie el localStorage
{/* este componente debe consumir los destacados del localStorage */}
{/* Deberan renderizar una Card por cada uno de ellos */}

const Favs = () => {
  const { state } = useContext(ContextGlobal); 
  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
  `;

  const [storedCards, setStoredCards] = useState(JSON.parse(localStorage.getItem('featuredDentist')) || []);

  {/*useEffect(() => {
    const handleStorageChange = () => {
      setStoredCards(JSON.parse(localStorage.getItem('featuredDentist')) || []);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);*/}

  

  return (
    <Container>
      <h1>Dentistas Destacados</h1>
      <div className="card-grid">
        {storedCards.map((element, id) => {
          return (
            <Card key={id} {...element}>
              {/* Aqui deberias renderizar las cards */}
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Favs;
