import React from "react";
import Home from "./pages/Home";
import Instituicoes from "./pages/Instituicoes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Instituicoes" element={<Instituicoes/>} />
         </Routes>
      </BrowserRouter>
   );
}
export default App;