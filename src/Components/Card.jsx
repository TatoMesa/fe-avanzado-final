import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ContextGlobal } from "./utils/global.context";


const Card = ( dentist) => {

  const { state } = useContext(ContextGlobal);
  
  const [buttonPressed, setButtonPressed] = useState(false);

  const Container = styled.div`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
  `;
  const Button = styled.button`
    background-color: ${props => props.pressed ? 'green' : 'red'};
  `;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    const storedDentist = JSON.parse(localStorage.getItem("featuredDentist")) || [];
    const index = storedDentist.findIndex((element) => element.id === dentist.id);

    if (index !== -1) {
      const newDentist = storedDentist.filter((elemento) => elemento.id !== dentist.id);
      localStorage.setItem("featuredDentist", JSON.stringify(newDentist));
    } else {
      storedDentist.push(dentist);
      localStorage.setItem("featuredDentist", JSON.stringify(storedDentist));
    }
    setButtonPressed(!buttonPressed);
  };

 {/* En cada card deberan mostrar en name - username y el id */}
 {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
 {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

  return (
    <Container>
      <div className="card">
        <Link to={`/detail/${dentist.id}`}>
          <img src="./" alt="" />
          <h2>{dentist.name}</h2>{" "}
          <h2>{dentist.username}</h2>{" "}
          <h2>{dentist.id}</h2>
        </Link>
        <Button onClick={addFav} className="favButton" pressed={buttonPressed}>
        {buttonPressed ? 'Recuperar' : 'Guardar'}</Button>
      </div>
    </Container>
  );
};

export default Card;
