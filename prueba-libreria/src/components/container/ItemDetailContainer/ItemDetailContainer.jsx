import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
    const [details, setDetalle] = useState([])
    const [cargando, setCargando] = useState(true)
    const { detailsId } = useParams()

    useEffect(() => {
        if (detailsId) {
            getFetch
                .then(resp => setDetalle(resp.filter(det => det.id === detailsId)))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
        } else {
            getFetch
                .then(resp => setDetalle(resp))
                .catch(err => console.log(err))
                .finally(() => setCargando(false))
        }
    }, [detailsId])    

    console.log(detailsId);
    return (
            <div>
                {cargando ? <h2>Cargando...</h2> : <ItemDetail details={details} />}
            </div>
    )
}