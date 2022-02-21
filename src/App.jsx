import { useState } from "react";
import "./App.css";
import Bienvenida from "./Components/Bienvenida/Bienvenida";
import Empresa from "./Components/Empresa/Empresa";
import Footer from "./Components/Footer/Footer";
import Inicio from "./Components/Inicio/Inicio";
import Menu from "./Components/Navbar/Menu";
import Nabvar from "./Components/Navbar/Nabvar";
import Productos from "./Components/Productos/Productos";


function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <div className="App">
      <Nabvar menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
      <Menu menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />
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
