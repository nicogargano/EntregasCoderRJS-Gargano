import { ItemD } from "./ItemD";

export const ItemDetail = ({ details }) => {

    return (
        <>
            {details.map(det => <ItemD details={det} key={det.id} />)}
        </>
    )
}

