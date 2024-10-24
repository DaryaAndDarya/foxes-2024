import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setModal } from '../../redux/coffee/coffeeSlice';
import OrderModal from '../ui/OrderModal';

export default function CoffeeMachinePage(): JSX.Element {
  const [coffeeType, setCoffeeType] = useState('Espresso');
  const [size, setSize] = useState('Small');
  const [sugar, setSugar] = useState(0);
  const [milk, setMilk] = useState(false);
  const coffee = useAppSelector((store) => store.coffee.coffee);
  const coffeeTypes = coffee.map((el) => el.title);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setSize('Small');
    setSugar(0);
    setMilk(false);
  }, []);
  const handleOrder = (): void => {
    dispatch(setModal({ coffeeType, size, sugar, milk }));
    console.log('Заказ:', { coffeeType, size, sugar, milk });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Кофейный автомат</h1>
      <Form>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Label className="mb-3">Тип кофе:</Form.Label>
            <Form.Select value={coffeeType} onChange={(e) => setCoffeeType(e.target.value)}>
              {coffeeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label className="mb-3">Размер:</Form.Label>
            <Form.Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="Small">Маленький</option>
              <option value="Medium">Средний</option>
              <option value="Large">Большой</option>
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label className="mb-3">Сахар:</Form.Label>
            <Form.Control
              type="number"
              value={sugar}
              min="0"
              max="5"
              onChange={(e) => setSugar(Number(e.target.value))}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Check
              type="checkbox"
              label="Молоко"
              checked={milk}
              onChange={(e) => setMilk(e.target.checked)}
            />
          </Col>
        </Row>
        <Button
          variant="success"
          onClick={() => {
            
            handleOrder();
          }}
          style={{
            backgroundColor: '#e7e7e7',
            color: '#00005c',
            margin: '5%',
            boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
          }}
        >
          Заказать
        </Button>
      </Form>
      <OrderModal />
    </Container>
  );
}
