import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context.jsx"; 
import { Themes } from "./utils/themes.js";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, setTheme} = useContext(ContextGlobal)

  const Navbar = styled.nav`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
    border-bottom: 0.5px solid ${state.theme.text};
    border-top: 0.5px solid ${state.theme.text};
    justify-content: space-around;
    width:100%;
    padding-right: 20px;
  `;

  const StyledLink = styled(Link)`
    color: ${state.theme.text};
  `;

  const Button = styled.button`
    background-color: ${state.theme.bgc};
    color: ${state.theme.color};
    border: none;
    font-size: 20px;
  `;
 
  const handleTheme = () => {
    if (state.theme === Themes.light) {
      setTheme(Themes.dark);
    } else {
      setTheme(Themes.light);
    }
  };

  return (
    <Navbar>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/contact">Contacto</StyledLink>
      <StyledLink to="/favs">Destacados</StyledLink>
      <Button onClick={handleTheme} >
        <FontAwesomeIcon icon = {state.theme.icons}/>
      </Button>
    </Navbar>
  );
};

export default Navbar;
