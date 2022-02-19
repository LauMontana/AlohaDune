import "./App.css";
import Bienvenida from "./Components/Bienvenida/Bienvenida";
import Empresa from "./Components/Empresa/Empresa";
import Footer from "./Components/Footer/Footer";
import Inicio from "./Components/Inicio/Inicio";
import Nabvar from "./Components/Navbar/Nabvar";
import Productos from "./Components/Productos/Productos";

function App() {
  return (
    <div className="App">
      <Nabvar />
      <section className="sections">
        <Inicio />
        <Bienvenida />
        <Productos />
        <Empresa />
        <Footer />
      </section>
    </div>
  );
}

export default App;
