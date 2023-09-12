import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState ('')
    const [lastName, setLastName] = useState('')
    // Ejemplo de como manipular inputs de manera no controlada
    const enviarDatos = (e)=>{
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.elements.nombre.value);
        // console.log(e.target.elements.apellido.value);
        const obj = {
            comprador: {
                nombre: name,
                apellido: lastName,
            },
            date: 18-8-2023,
            cart: 3,
            total: 1500

        }
        console.log(obj)
    };
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }
    return (
        <div>
            <p>En este ejemplo se seteo un estado para cada input de manera separada, ademas hay que incluir dentro de cada input el evento onChange como disparador de una funcion. Esto va a hacer que por cada cambio que haya dentro de mis inputs se dispare una funcion que me permita setear el estado en cada uno de mis inputs. </p><p>Ademas en cada input tengo que incluir la propiedad value (donde se guarda el valor del input) llamando al estado del input especificdo. En este caso react nos dice que el valor de input de retroalimenta de lo que vale mi estado.</p>
            <form action="" onSubmit={enviarDatos}>
                <input 
                type="text" 
                placeholder="Nombre" 
                name="nombre" 
                onChange={handleName} 
                value={name}/>
                
                <input 
                type="text" 
                placeholder="Apellido" 
                name="apellido" 
                onChange={handleLastName} 
                value={lastName}/>

                <button>Enviar</button>
            </form>
        </div>
    )
    
}

export default Form