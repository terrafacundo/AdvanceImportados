function init_productos(){
//funcion en pag catalogo

let contenedor_productos_catalogo = document.getElementById("contenedor_resultados");

console.log(contenedor_productos_catalogo);

function generadora_catalogo(producto){
    for (const producto of productos){
            let tarjeta_producto_catalogo = document.createElement("div");
            let foto_producto_catalogo = document.createElement("div");
            let nombre_producto_catalogo = document.createElement("h2");
            let precio_producto_catalogo= document.createElement("h4");
            let boton_producto_catalogo = document.createElement("button");
        
            //asignando
            foto_producto_catalogo.innerHTML = `<img src="${producto.foto}" alt="${producto.nombre}"/>`;
            nombre_producto_catalogo.innerHTML =`${producto.nombre}`;
            precio_producto_catalogo.innerHTML = `U$D ${producto.precio}`;
            boton_producto_catalogo.innerHTML = `<a href="">Más info</a>`;
    
            //clases
            tarjeta_producto_catalogo.className="tarjeta_producto";
            foto_producto_catalogo.className="foto_producto";
            nombre_producto_catalogo.className="nombre_producto";
            precio_producto_catalogo.className="precio_producto";
            boton_producto_catalogo.className="boton_masinfo";
    
            //imprimiendo
            contenedor_productos_catalogo.append(tarjeta_producto_catalogo);
            tarjeta_producto_catalogo.append(foto_producto_catalogo,nombre_producto_catalogo,precio_producto_catalogo,boton_producto_catalogo);
    }
    }

    //instanciando en el DOM
    generadora_catalogo();

}