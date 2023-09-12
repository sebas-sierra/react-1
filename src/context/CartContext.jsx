import { useState, createContext } from "react";

//creo y exporto el contexto de mi carrito de compras:
export const CartContext = createContext();

//Aca van las funciones y variables de mi contexto
const CartProvider = ({ children }) => {
    
    //El estado y mi seteador de estado tienen que estar en el contexto, para que el valor sea unico en toda mi aplicacion. 
    //Tenemos que iniciar con un array vacio
    const [ cart, setCart ] = useState([]);
    
    //console.log(props.children);

    //funcion para agregar al carrito
    const addToCart = (item, cantidad) => {
        //console.log({ ...item, cantidad});
        if (isInCart(item.id)) {
            //alert( 'Ya esta en el carrito, sumale la cantidad')
            sumarCantidad (item, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad}]);
        }
    }

    //funcion para ver si esta en el carrito
    const isInCart = (id) => {
        return cart.some((prod)=>  prod.id === id)
    }

    //funcion para sumar la cant de un mismo producto
    const sumarCantidad = (itemPorAgregar, cantidad )=> {
        const cartActualizado = cart.map((prodDelCart)=>{
            if (itemPorAgregar.id === prodDelCart.id) {
                const prodActualizado = { 
                    ...prodDelCart,
                    //con este metodo la cantidades se suman sin respetar el limite de stock
                    //cantidad: prodDelCart.cantidad + cantidad,

                    //con este metodo los valores de la variable cantidad se pisan y no se suman
                    cantidad,
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });
        setCart(cartActualizado);
    };

    //una segunda opcion usando Condicional Ternario en la funcion sumar
    /*const sumarCantidadTernario = (itemPorAgregar, cantidad) => {
        const cartActualizado2 = cart.map((prodDelCart) => 
            itemPorAgregar.id === prodDelCart.id
            ? {
                ...prodDelCart,
                cantidad: prodDelCart.cantidad + cantidad
            }
            : prodDelCart
        );
        setCart(cartActualizado2)
    }*/

    //funcion para eliminar un item (elimina un elemento)
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod)=>prod.id !== id)
        setCart(prodFiltrados)
 
    }

    //funcion para eliminar todos los items (vaciar el carrito)
    const deleteAll = () => {
        setCart([])
    }

    //funcion para sumar total (precio final) del carrito
    const totalPrecio = () => { 

    }

    //funcion para sumar total de unidades del carrito
    const totalUnidades = () => { 
        let count = 0;
        const copia = [...cart]
        copia.forEach((prod) => {
            count = count += prod.cantidad
            
        });
        return count
    }


    console.log(cart)
    

    return (
        <CartContext.Provider value = {{ cart, addToCart, deleteAll, deleteOne, totalUnidades }}> {children} </CartContext.Provider>

    )
}

export default CartProvider;