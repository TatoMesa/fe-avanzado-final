import { useContext } from "react";
import { styled } from "styled-components";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {

  const {state} = useContext(ContextGlobal)

  const Footer = styled.footer`
  background-color: ${state.theme.bgc};
  color: ${state.theme.text};
  border-bottom: 0.5px solid ${state.theme.text};
  border-top: 0.5px solid ${state.theme.text};
`;

  return (
    <Footer>
      <h3> Powered by </h3>
      <img src="./images/DM.png" alt="DM-logo" />
    </Footer>
  );
};

export default Footer;
