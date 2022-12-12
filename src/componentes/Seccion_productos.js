import '../estilos/seccion_productos.css';

function Seccion_productos(props){
    return(
        <div  className="seccion-pruductos-container">
            <div className="datos-productos">
                <img src={require(`../imagenes/${props.imagen}`)} alt={props.imagen}/>
                <p>Nombre: {props.nombre_producto}</p>
                <p>Precio: {props.precio_producto}$</p>
                <p>SKU: {props.sku_producto}</p>
                <p>Cantidad:N# {props.catidad_producto}</p>
            </div>
        </div>

        
    )
}


export default Seccion_productos;