import { useContext } from "react";
import {Link} from "react-router-dom";
import {ContextGlobal} from "../Components/utils/global.context.jsx"; 
import { Themes } from "./utils/themes.js";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, setTheme} = useContext(ContextGlobal)

  const handleTheme = () => {
    if (state.theme === Themes.light) {
      setTheme(Themes.dark);
    } else {
      setTheme(Themes.light);
    }
  };


  

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/home">Home</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button onClick={handleTheme}>Modo Oscuro</button>
    </nav>
  );
};

export default Navbar;
