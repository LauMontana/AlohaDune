
import './App.css';
import Bienvenida from './Components/Bienvenida/Bienvenida';
import Empresa from './Components/Empresa/Empresa';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Inicio/Inicio';
import Productos from './Components/Productos/Productos';

function App() {
  return (
    <div className="App">
      <Inicio />
      <Bienvenida />
      <Productos />
      <Empresa />
      <Footer />
      

    </div>
  );
}

export default App;
