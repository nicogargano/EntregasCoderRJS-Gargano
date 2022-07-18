import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export function Item({productos}) {
    const {id,categoria,name,price,foto} = productos
    return (
        <Card>
            <Card.Header as="h5">{`${name} - ${categoria}`}</Card.Header>
            <Card.Body>
                <Card.Img className='w-25 rounded mx-auto d-block' variant="top"  src={foto} />
                <Link to={`/detalle/${id}`}>
                    <Button size="lg" className='w-25' variant="secondary">Detalles</Button>
                </Link>
            </Card.Body>
            <Card.Footer as="h5">{price}</Card.Footer>
        </Card>
    )
}