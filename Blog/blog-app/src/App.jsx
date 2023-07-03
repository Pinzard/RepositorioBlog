// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Páginas/Home";
import { CrearEntrada } from "./Páginas/CrearEntrada";
import { PáginaEntradaCompleta } from "./Páginas/PáginaEntradaCompleta";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CrearEntrada" element={<CrearEntrada />} />
        <Route path="/entrada/:postId" element={<PáginaEntradaCompleta />} />
      </Routes>
    </Router>
  );
};

export default App;
