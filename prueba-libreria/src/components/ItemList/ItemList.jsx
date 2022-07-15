import { productos } from '../../helpers/getFetch'
import { Item } from '../Item/Item'

export const ItemList =() => {

    return(
        productos.map ((item) => <Item item={item} key= {item.id}/>)

)}


