//Fetch
//
//POST

const BASE_URL= 'https://pokeapi.co/api/v2/';

//Fetch no async
fetch(BASE_URL + 'pokemon/ditto')
        .then(res=>res.json())
        .then(data=>console.log(data));

//Fetch async
//El await siempre va a hacer q espere a q se complete lo solicitado para continuar la linea de abajo solo para este caso
//Parsear es formatear

const fetchPokemon = async (pokemon) => {
    try {
        //const response = await fetch(BASE_URL + 'pokemon/ditto');
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

//Obtener pokemon 
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        createCard(pokemon);
    })

document.addEventListener('DOMContent.Loaded', async ()=>{
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    createCard(pokemon);
})

//Obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () =>{
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
        const newId = Math.max(1, currentPokeId-1);
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name); 
        createCard(pokemon);
    })

    document.getElementById('next-btn')
    .addEventListener('click', async () =>{
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
        const newId = currentPokeId+1;
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        createCard(pokemon); 
    })

    //Creación de tarjeta
    function createCard (pokemon){
        document.getElementById('name').textContent= "Nombre: " + pokemon.name;
        document.getElementById('id').textContent= "ID: " + pokemon.id;
        document.getElementById('weight').textContent= "Weight: " + pokemon.weight;
        document.getElementById('picImg').src= pokemon.sprites.front_default;
    }




    /////////////////////POST, no es asincrono
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))


    ////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch

