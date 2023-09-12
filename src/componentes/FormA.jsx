import React, {useState} from 'react'

const FormA = () => {
    const [data, setData] = useState({ apodo: '', equipo: '' });
    
    // funcion para enviar mi estado 'data', que recopilo la info de los inputs, a mi base de datos.
    const enviarDatos = (e) => {
        e.preventDefault();
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };
    
    console.log(data);
    
  return (
    <div>
        <h5>Como guardar data de muchos inputs en un unico estado</h5>
        <p>En este ejemplo todos los input se apilan dentro de un unico estado, este estado debe ser un objeto y ademas el valor tiene que estar seteado como 'vacio'. La funcion onChange en este caso dispara una funcion (en este ejemplo esta funcion se llama handleChange) que va recopilando los datos de los campos de forma dinamica. La funcion 'handleChange' va a setear los valores de mi estado usando el metodo spread y luego recorriendo los camos del formulario de manera denamica tomando los valores. En el value hay que llamar al valor dentro del estado que creamos en este caso data.nombre. Es decir que los casos donde trabajemos con forms de mas de 6 inputs podemos aplicar este metodo y ahorramos tener que setear muchos estados y funciones. </p><p>Ademas en cada input tengo que incluir la propiedad value (donde se guarda el valor del input) llamando al estado del input especificdo. En este caso react nos dice que el valor de input de retroalimenta de lo que vale mi estado.</p>
        <form action="" onSubmit={enviarDatos}>
            <input
                type="text" 
                placeholder="Apodo" 
                name="apodo" 
                onChange={handleChange} 
                value={data.apodo}/>
        
            <input 
                type="text" 
                placeholder="Equipo" 
                name="equipo" 
                onChange={handleChange} 
                value={data.equipo}/>

            <button>Enviar</button>
        </form>
    </div>
  )
}

export default FormA