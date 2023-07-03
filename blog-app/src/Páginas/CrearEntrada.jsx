import { Header } from "../Componentes/Header";
import { AddPost } from "../Componentes/AddPost";
import { Footer } from "../Componentes/Footer";
import "../Componentes/AddPost.css";

export function CrearEntrada() {
  return (
    <>
      <Header />
      <div
        className="container-fluido caja-add"
        style={{
          width: "80%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main
          className="content"
          style={{ flex: "1 0 auto", overflowY: "auto" }}
        >
          <AddPost />
        </main>
        <Footer />
      </div>
    </>
  );
}
