import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import { ItemList } from './ItemList'

export const ItemListContainer = ({ saludos }) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getFetch
                .then(resp => setProductos(resp.filter(item => item.categoria === categoriaId)))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
        }
    }, [categoriaId])    

    return (
        <div>
            {saludos}
            <div>
                {cargando ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
            </div>
        </div>
    )
}