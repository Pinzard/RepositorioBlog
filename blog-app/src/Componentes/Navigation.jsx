import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav className="navbar d-flex justify-content-center">
      <div>
        <Link to="/CrearEntrada" className="nav-link-escribir">
          <button className="button-escribir">Añadir Entrada</button>
        </Link>
      </div>
    </nav>
  );
};
