import { useState, useEffect } from 'react'
import { getFetch } from '../../../helpers/getFetch'
import { ItemList } from '../../ItemList/ItemList'

const ItemListContainer = ({saludos}) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally (() => setCargando(false))
    }, [])

    const handleBool = () => {
        setCargando(!cargando)
    }

    console.log(productos)
    return (
        <div>
            {saludos}
            <button onClick={handleBool}>Estado</button>
            <div>
                {cargando ? <h2>Cargando...</h2> :  <ItemList/>}
            </div>
        </div>
    )
}

export default ItemListContainer