// creacion de variables o selectores

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas= document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const  max = new Date().getFullYear();
const min = max-10;
//console.log(min);
 
//crear un objeto
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

//eventos

document.addEventListener('DOMContentLoaded',()=>{
    //llenar el listado de select year
    llenarSelect();
    // llenado de la bd de los autos
    mostrarAutos(autos);

})

marca.addEventListener('change',e=>{
   // console.log(e.target.value)
   datosBusqueda.marca = e.target.value;
  // console.log(datosBusqueda.marca)
  filtrarAuto();
})

year.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.year = Number(e.target.value);
   // console.log(datosBusqueda.year)
   filtrarAuto();
})
minimo.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.minimo = Number(e.target.value);
    console.log(datosBusqueda.minimo)
    filtrarAuto();
})

maximo.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.maximo =Number(e.target.value);
    //console.log(datosBusqueda.maximo)
    filtrarAuto();
})

puertas.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.puertas = Number(e.target.value);
   // console.log(datosBusqueda.puertas)
   filtrarAuto();
})

transmision.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.transmision = e.target.value;
   // console.log(datosBusqueda.transmision)
   filtrarAuto();
})

color.addEventListener('change',e=>{
    // console.log(e.target.value)
    datosBusqueda.color = e.target.value;
   // console.log(datosBusqueda.color);
   filtrarAuto();
})


// funciones


function llenarSelect(){
    for(let i=max;i>min;i--){
        const opcion  = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function mostrarAutos(arregloAutos){
    //console.log(arregloAutos)
    limpiarHTML();
    arregloAutos.forEach( i=> {
       const autoHTML = document.createElement('p');

       const {marca,modelo,year,precio,puertas,color,transmision} = i;
       
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - Precio: ${precio} -  ${color} - Puertas: ${puertas} - Transmision: ${transmision}`
        
        resultado.appendChild(autoHTML);

    });
}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');

    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}

// funciones para filtrar la informacion

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).
    filter( filtrarTransmision).filter( filtrarColor)

   // console.log(resultado)

    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }

}

function  noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('no hay resultados para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)

}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}
 
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto;
}
function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto;
}