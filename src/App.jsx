import React from "react";
import Home from "./pages/Home";
import Instituicoes from "./pages/Instituicoes";
import Formulario from "./pages/Formulario";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Instituicoes" element={<Instituicoes/>} />
            <Route path="/Formulario" element={<Formulario/>} />
         </Routes>
      </BrowserRouter>
   );
}
export default App;