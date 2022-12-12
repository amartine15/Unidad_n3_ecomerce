import Seccion_productos from "./Seccion_productos";
import {zapatos} from "./Obj_Zapatos";
import {pantalones} from "./Obj_Pantalones";
import {remeras, gorros} from "./Obj_Remeras_Gorros";

const listadozapatos = zapatos.map((items_zapatos)=>{
    console.log(items_zapatos);
    return  <Seccion_productos imagen={items_zapatos.imagen} nombre_producto={items_zapatos.nombrezapatos} precio_producto={items_zapatos.preciozapato} sku_producto={items_zapatos.skuzapato} catidad_producto={items_zapatos.cantidadzapatos}  ></Seccion_productos>
})

const listadopantalones = pantalones.map((items_pantalones)=>{
    console.log(items_pantalones);
    return  <Seccion_productos imagen={items_pantalones.imagen} nombre_producto={items_pantalones.nombrepantalones} precio_producto={items_pantalones.preciopantalones} sku_producto={items_pantalones.skupantalones} catidad_producto={items_pantalones.cantidadpantalones}  ></Seccion_productos>
})

const listadoremeras = remeras.map((items_remeras)=>{
    console.log(items_remeras);
    return  <Seccion_productos imagen={items_remeras.imagen} nombre_producto={items_remeras.nombreremeras} precio_producto={items_remeras.precioremeras} sku_producto={items_remeras.skuremeras} catidad_producto={items_remeras.cantidadremeras}  ></Seccion_productos>
})

const listadogorros = gorros.map((items_gorros)=>{
    console.log(items_gorros);
    return  <Seccion_productos imagen={items_gorros.imagen} nombre_producto={items_gorros.nombregorros} precio_producto={items_gorros.preciogorros} sku_producto={items_gorros.skugorros} catidad_producto={items_gorros.cantidadgorros}  ></Seccion_productos>
})


function Seccion_titulos(props){
   if (props.id === "zapatos-seccion"){
    return(
        <div id={props.id} className="seccion_titulos">
         <h1>{props.titulo_seccion}</h1>
         {listadozapatos}  
         </div> 
     )
   }

   if (props.id === "pantalones-seccion"){
    return(
        <div id={props.id} className="seccion_titulos">
         <h1>{props.titulo_seccion}</h1>
         {listadopantalones}  
         </div> 
     )
   }

   if (props.id === "remeras-seccion"){
    return(
        <div id={props.id} className="seccion_titulos">
         <h1>{props.titulo_seccion}</h1>
         {listadoremeras}  
         </div> 
     )
   }

   if (props.id === "gorros-seccion"){
    return(
        <div id={props.id} className="seccion_titulos">
         <h1>{props.titulo_seccion}</h1>
         {listadogorros}  
         </div> 
     )
   }
}
export default Seccion_titulos;