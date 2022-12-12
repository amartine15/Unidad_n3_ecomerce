import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Seccion_titulos from './componentes/Seccion_titulos';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Seccion_titulos id="zapatos-seccion" titulo_seccion="Zapatos"></Seccion_titulos>
      <Seccion_titulos id="pantalones-seccion" titulo_seccion="Pantalones"></Seccion_titulos>
      <Seccion_titulos id="remeras-seccion" titulo_seccion="Remeras"></Seccion_titulos>
      <Seccion_titulos id="gorros-seccion" titulo_seccion="Gorros"></Seccion_titulos>
      <Footer></Footer>
    </div>
  );
}

export default App;
