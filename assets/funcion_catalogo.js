function init_productos(){
//funcion en pag catalogo
//tomando nodos
let contenedor_productos_catalogo = document.getElementById("contenedor_resultados");
let ap_checkbox = document.getElementById("apple_checkbox");
let le_checkbox = document.querySelectorAll(".le_checkbox");
let al_checkbox = document.querySelectorAll(".al_checkbox");
let msi_checkbox = document.getElementById("defaultCheck4");
let acc_checkbox = document.getElementById("acc_checkbox");
let au_checkbox = document.querySelectorAll(".au_checkbox");
let sm_checkbox = document.querySelectorAll(".sm_checkbox");
let ta_checkbox = document.querySelectorAll(".ta_checkbox");
let wa_checkbox = document.querySelectorAll(".wa_checkbox");
let mo_checkbox = document.querySelectorAll(".mo_checkbox");
let pe_checkbox = document.querySelectorAll(".pe_checkbox");
let pv_checkbox = document.querySelectorAll(".pv_checkbox");


//
function generadora_catalogo(y){
    for (const producto of y){
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


    
//



    //instanciando en el DOM
    generadora_catalogo(productos);
}