import React from 'react'
import { useState } from 'react'

export const CarritoContext = React.createContext()

export const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart);
    const agregarCarrito = (item) => {
        cart.push(item)
    }
    const quitarCarrito = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () => {
        setCart([])
    }


    return (
        <div>
            <CarritoContext.Provider value={[cart, agregarCarrito, vaciarCarrito, quitarCarrito]}>
                {children}
            </CarritoContext.Provider>
        </div>
    )
}

