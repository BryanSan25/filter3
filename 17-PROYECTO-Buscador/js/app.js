const resultados = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const pMinimo = document.querySelector('#minimo');
const pMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transimision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const maxYear = new Date().getFullYear(); //Aqui seleccionamos el año actual
const minYear = maxYear - 12; //Aqui le restamos 12 años al año actual

const dataSearch = {
    marca: '',
    year: '',
    min: '',
    max: '',
    puertas: '',
    transimision: '',
    color: '',
}



//Iteramos array 
const mostrarAutos = () => {
    autos.forEach(auto => {    
        //Destructuring
        const {marca, modelo, color, puertas, transmision} = auto;

        const insertHTML  = document.createElement('p');
        insertHTML.textContent = `
           Marca: ${marca} - Modelo: ${modelo} - Transmision: ${transmision} - Color: ${color} - Puertas: ${puertas} 
        `;
        resultados.appendChild(insertHTML);
    });
}

//Generar años - carros - select
const llenandoSelect = () => {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}
const filtrarAuto = auto => { //funcion de alto nivel se le llama dentro del filter
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ); //Encadenmiento con los filter 
    console.log(resultado)
}

const filtrarMarca = auto => { 

    const {marca} = dataSearch; //Destructuring al dataSearch

    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}
const filtrarYear = (auto) => { 

    const {year} = dataSearch; //Destructuring
    
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}





const cargarEventos = () => {
    marca.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.marca = e.target.value;

        filtrarAuto();
    });
    year.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.year = e.target.value;
        filtrarYear();
    });
    pMinimo.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.min = e.target.value;
    });
    pMaximo.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.max = e.target.value;
    });
    puertas.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.puertas = e.target.value;
    });
    transimision.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.transimision = e.target.value;
    });
    color.addEventListener('change', e => { //change es un event de los Select que se ejecuta cuando cambias de option
        dataSearch.color = e.target.value;
    });

}

const initApp = () => {
    mostrarAutos();

    llenandoSelect(); 

    cargarEventos();
}

initApp();

