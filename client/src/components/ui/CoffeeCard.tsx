import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { CoffeeTypeDb } from '../../types/coffeeTypes';
import { useAppDispatch } from '../../hooks/hook';
import { addSelectedCoffee } from '../../redux/coffee/coffeeSlice';

type CoffeeCardPropsTypes = {
  onecoffee: CoffeeTypeDb;
  deleteHandler?: (id: CoffeeTypeDb['id']) => void;
};
const style = {
  backgroundColor: '#e7e7e7',
  color: '#00005c',
  margin: '5%',
  boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
};
export default function CoffeeCard({
  onecoffee,
  deleteHandler,
}: CoffeeCardPropsTypes): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Col sm={6} className="mb-3">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={onecoffee.url} />
        <Card.Body>
          <Card.Title>{onecoffee.title}</Card.Title>
          <Card.Text>{onecoffee.desc}</Card.Text>
          <Card.Text>Автор кофе: {onecoffee.authorName}</Card.Text>
          <Card.Text>{onecoffee.reason}</Card.Text>
          <Button style={style} onClick={() => void deleteHandler?.(onecoffee.id)}>
            Выпить полностью
          </Button>
          <Button style={style} onClick={() => void dispatch(addSelectedCoffee(onecoffee))}>
            Буду брать каждый день
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
