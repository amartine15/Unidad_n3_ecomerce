import Logo from '../imagenes/logo-ecomerce.png';
import '../estilos/header.css';

function Header(){

    return(
        <div className="header">
            <div className="imagen-header">
                <img src={Logo} alt="logo" />
            </div>

            <div className="nav">
                <a href="#zapatos-seccion">Zapatos</a>
                <a href="#pantalones-seccion">Pantalones</a>
                <a href="#remeras-seccion">Remeras</a>
                <a href="#gorros-seccion">Gorros</a>
            </div>
        </div>
    )

}


export default Header;