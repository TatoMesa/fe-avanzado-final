import { useContext } from "react";
import {Link} from "react-router-dom";
import {ContextGlobal} from "../Components/utils/global.context.jsx"; 
import { Themes } from "./utils/themes.js";
import { styled } from "styled-components";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, setTheme} = useContext(ContextGlobal)

  const Navbar = styled.nav`
    background-color: ${state.theme.bgc};
    color: ${state.theme.text};
  `;

  const StyledLink = styled(Link)`
    color: ${state.theme.text};
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
      <button onClick={handleTheme}>Modo Oscuro</button>
    </Navbar>
  );
};

export default Navbar;
