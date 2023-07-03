import { Feed } from "../Componentes/Feed";
import { Header } from "../Componentes/Header";
import { Navigation } from "../Componentes/Navigation";
import { Footer } from "../Componentes/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid caja-home" style={{ width: "80%" }}>
        <Navigation />
        <main className="content">
          <div className="row">
            <div className="col">
              <Feed/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
