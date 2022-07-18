import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {ItemCount} from '../../ItemCount/ItemCount'
import { CarritoContext } from "../../../context/CartContext";
import Card from 'react-bootstrap/Card';

export const ItemD = ({ details }) => {

    const [cart, agregarCarrito, vaciarCarrito] = useContext(CarritoContext)
    const [cantidad, setCantidad] = useState();
    console.log(cart);

    const { name, price, stock, detalles, foto } = details;
    const funcionContador = (contador) => {
        setCantidad(contador)
        const producto = { item: details.nombre, quantity: contador }
        agregarCarrito(producto)
        console.log("El valor del contador", contador);
    }
    return (
        <>
            <Card>
                <Card.Img className='w-25 rounded mx-auto d-block' variant="top" src={foto} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {`${detalles} - ${price}`}
                    </Card.Text>
                </Card.Body>
            </Card>
            {cantidad ? [<Link to='/cart'><button>Terminar la compra</button> </Link>]
                :
                <ItemCount stock={stock} initial={1} onAdd={funcionContador} onRemove={vaciarCarrito} />}
        </>
    )
}

