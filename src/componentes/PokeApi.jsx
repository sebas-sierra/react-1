import React, {useState, useEffect} from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PokeApi = () => {
    const [pokemones, setPokemones] = useState ([]);

    useEffect (() => {
      const getPokemones = async () => {
        const response = await fetch('http://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        const listaPokemones = await response.json()
        //desestructuramos la variable 'results' (es la variable que contiene la info que necesitamos obtener) de la constante 'listaPokemones'
        const { results } = listaPokemones

        //seteamos nuestro estado con la viariable results que extrajimos con la desestructuracion anterior de la variable listaPokemones
        // setPokemones(results)

        const newPokemones = results.map( async (pokemon) => {
          
          const response = await fetch(pokemon.url)
          const poke = await response.json()
          // console.log(poke);

          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default
          }
        })
        // console.log(await Promise.all(newPokemones));
        setPokemones(await Promise.all(newPokemones));

        }
        getPokemones()

    }, [])


  return (
    <div>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

   
    `}
      </style>
      <h1>Pokedex</h1>
      <a href="https://youtu.be/6VB2m4P8Fdc">Consumir Pokeapi con Async - Await</a><br />
      <p>(Este ejemplo)</p><br /><br />

      <a href="https://www.youtube.com/watch?v=6u1RHUoXIPI">Cómo Consumir APIs en REACT como un PROFESIONAL </a><br />
      <p>MiduDev</p><br /><br />

      <a href="https://www.youtube.com/watch?v=FJ-w0tf3d_w">Cómo CONSUMIR una API REST con JAVASCRIPT y Fetch + Promises con gestión de Errores</a><br /><br />
      <Row xs={1} md={5} className='g-4'>
      { pokemones.map(pokemon => {
          return (
            <Col>
            <Card key={pokemon.id}>
              <Card.Img variant="top" src={pokemon.img} alt={pokemon.name} />
              <Card.Body className="d-grid gap-2">
                <Button variant="flat" >#{pokemon.id}</Button>
                <Card.Title>{pokemon.name}</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          )
        })
      }
      </Row>
    </div>
  )
}

export default PokeApi