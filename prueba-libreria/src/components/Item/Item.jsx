import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Item({item}) {
    return (
        <Card>
            <Card.Header as="h5">{`${item.name} - ${item.categoria}`}</Card.Header>
            <Card.Body>
                <Card.Img className='w-50' variant="top" src={item.foto} />
                <Button size="lg" className='w-25' variant="secondary">Detalles</Button>
            </Card.Body>
            
            <Card.Footer as="h5">{item.price}</Card.Footer>
        </Card>
    );
}