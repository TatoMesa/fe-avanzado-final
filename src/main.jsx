import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
 
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Favs" element={<Favs />} />
          <Route path="/Detail/:dentistId" element={<Detail/> } />
          <Route path="*" element={<Navigate to="/" /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
