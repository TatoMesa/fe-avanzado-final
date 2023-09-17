// import Card from "../Components/Card";

import { useContext } from "react";
import {ContextGlobal} from "../Components/utils/global.context.jsx";  
import Card from "../Components/Card.jsx";
import { styled } from "styled-components";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal);

  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
    width:100%;
    padding:0;
    margin:0;
  `;

  return (
    <Container>
      <h1>Nomina Completa de Dentistas</h1>
      <div className="card-grid">
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        {state.dentists.map((element, id) => {
          return (
            <Card key={id} {...element}> {/* Aqui deberias renderizar las cards */}
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
