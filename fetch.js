function solicitud(datos){

    console.log ('Funcion no asincrona');
    return new Promise(resolve =>setTimeout(resolve, datos));
    
}
//await espero lo siguiente, 
//setTimeOut espera sierto tiempo milisegundos, cuando se hace una peticion a una aplicacion si no hay respuesta fallo solicitud ya que se termino el tiempo pq no resolvio

async function f() {
    console.log('Inicio de funcion asincrona');

    await solicitud(2000);

    console.log('Terminamos ejecucion de func asincrona');
}

function bigFunction(){
    console.log('Funcion normal ejecutada');
    let result= 0;

    for(let i=0; i<1e7; i++){
        result+=i;
    }

    console.log('Funcion normal terminada', result);
}

//f();
//bigFunction();

const COUNTER_P = document.getElementById('counter');
let counter = 0;

document.getElementById(`btn-counter`)
.addEventListener(`click`, async (e) => {
    await setTimeout(() => {
        counter++;
        COUNTER_P.textContent = counter;


    }, 2000);

})