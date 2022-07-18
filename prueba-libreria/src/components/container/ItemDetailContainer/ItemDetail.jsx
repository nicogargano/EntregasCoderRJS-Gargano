import Card from 'react-bootstrap/Card';


export const ItemDetail = ({ details }) => {
    // const {id,name,price,foto,detalles} = details
    return (
    
            details.map (det =>  
                <Card key={det.id}>
                    <Card.Img className='w-25 rounded mx-auto d-block' variant="top" src={det.foto} />
                    <Card.Body>
                        <Card.Title>{det.name}</Card.Title>
                        <Card.Text>
                            {`${det.detalles} - ${det.price}`}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
    
    )
}
