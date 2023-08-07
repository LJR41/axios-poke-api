import React, {useState} from 'react'
import axios from 'axios'

const AxiosPokeApi = () => {
    const [pokemon, setPokemon] = useState()

    const getPokeWithAxios = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                setPokemon(response.data.results)
            })


    }

    return (
        <div>
            <h1>Get Pokemon</h1>
            { pokemon? 
            <ul >
                {pokemon.map((p, idx) =>
                    <li key={idx}>{p.name}</li>
                )


                }
            </ul>
            : <ul></ul>
}
            <button onClick={getPokeWithAxios}> Get All Poke Using Axios</button>

        </div>
    )
}

export default AxiosPokeApi