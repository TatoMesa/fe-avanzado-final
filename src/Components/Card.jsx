import { useContext, useEffect, useReducer} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ContextGlobal } from "./utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";




const Card = ( dentist) => {

  const { state, setSize } = useContext(ContextGlobal);

  
  const StyledLink = styled(Link)`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding: 0.5rem 0.5rem 0 0.5rem;
    border: 0.5px solid rgb(136, 136, 136);
  `;
  const Button = styled.button`
    background-color: ${state.theme.bgc};
    color: ${props => props.$pressed ? 'red' : 'white'};
    position: relative;
    top: -12%;
    left: 70%;
    border: none;
    font-size: 25px;
  `;
    
  function reducer(state, action) {
    switch (action.type) {
      case "SAVE":
        return !state;
      case "RECOVER":
        return action.payload ;
      default:
        throw new Error();
    }
  }
  
  const initialState = false ;
  const [newState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedDentist = JSON.parse(localStorage.getItem("featuredDentist")) || [];
    const isStored = storedDentist.some(u => u.id === dentist.id);
    dispatch({ type: 'RECOVER', payload: isStored });
  }, [dentist.id]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    const storedDentist = JSON.parse(localStorage.getItem("featuredDentist")) || [];
    if (newState) {
      const newDentist = storedDentist.filter((elemento) => elemento.id !== dentist.id);
      localStorage.setItem("featuredDentist", JSON.stringify(newDentist));
      setSize(state.sizeLocalStorage -1);
    } else {
      storedDentist.push(dentist);
      localStorage.setItem("featuredDentist", JSON.stringify(storedDentist));
      setSize(state.sizeLocalStorage +1);
    }
   dispatch({ type: 'SAVE' })
  };

 {/* En cada card deberan mostrar en name - username y el id */}
 {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
 {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

  return (
    <div>
      <StyledLink to={`/detail/${dentist.id}`}>
        <img src="/public/images/doctor.jpg" alt="Imagen Doctor" />
        <h2>{dentist.name}</h2> 
        <h2>{dentist.username}</h2>
        <h2>{dentist.id}</h2>
      </StyledLink>
      <Button onClick={addFav} $pressed={newState} >
        <FontAwesomeIcon icon={faStar} />
      </Button>
    </div>
  );
};

export default Card;
