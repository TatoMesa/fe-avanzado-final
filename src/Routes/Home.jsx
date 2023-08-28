// import Card from "../Components/Card";

import { useContext } from "react";
import {ContextGlobal} from "../Components/utils/global.context.jsx";  
import Card from "../Components/Card.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context




const Home = () => {

  
  const {state} = useContext(ContextGlobal)

    return (
    <main className="">
      <div className="card-grid">
        <p>{state.theme.text}</p>
        
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}  
        {state.dentist.map((element, id) => {
          return (
            <Card key={id} {...element}>
              {/* Aqui deberias renderizar las cards */}
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
