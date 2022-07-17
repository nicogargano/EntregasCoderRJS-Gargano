import { Item } from './Item'


export const ItemList =({productos}) => {
    return(
        <>
        {productos.map (item => (<Item productos={item} key= {item.id}/>))}
        </>

)}


