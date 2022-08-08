function init_productos(){
//funcion en pag catalogo
//tomando nodos
let contenedor_productos_catalogo = document.getElementById("contenedor_resultados");


//
function generadora_catalogo(){
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
            tarjeta_producto_catalogo.classList.add("tarjeta_producto");
            foto_producto_catalogo.classList.add("foto_producto");
            nombre_producto_catalogo.classList.add("nombre_producto");
            precio_producto_catalogo.classList.add("precio_producto");
            boton_producto_catalogo.classList.add("boton_masinfo");

    
            //imprimiendo
            contenedor_productos_catalogo.append(tarjeta_producto_catalogo);
            tarjeta_producto_catalogo.append(foto_producto_catalogo,nombre_producto_catalogo,precio_producto_catalogo,boton_producto_catalogo);




                    //funcion filtro
        //asignacion de botones a nodos
        let filtro_all = document.getElementById('boton_todos');
        let filtro_ap = document.getElementById("boton_busqueda_apple");
        let filtro_gm = document.getElementById("boton_busqueda_gaming");
        let filtro_min = document.getElementById("boton_busqueda_mineria");
        let filtro_acc = document.getElementById("boton_busqueda_accesorios");



        //Otorgandole funcion a esos nodos
        filtro_all.addEventListener("click", ()=>{
            tarjeta_producto_catalogo.classList.remove("d-none")
        });
        filtro_ap.addEventListener("click", ()=>{console.log("apple")});
        filtro_gm.addEventListener("click", ()=>{filtrado_por_demanda('gaming')});
        filtro_min.addEventListener("click", ()=>{console.log("hola")});
        filtro_acc.addEventListener("click",()=>{console.log("aloha")})

        //funcion
        function filtrado_por_demanda(valor){
            tarjeta_producto_catalogo.classList.add("d-none")
            const filtrado_nuevo_array = productos.filter(producto=> producto.categoria === valor);
            ///hasta aca funciona el filtrao
                contenedor_productos_catalogo.innerHTML="";
                generadora_catalogo(filtrado_nuevo_array);
        }
    }
    }





    //instanciando en el DOM
    generadora_catalogo();
}