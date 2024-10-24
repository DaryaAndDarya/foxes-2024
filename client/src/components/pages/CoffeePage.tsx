import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CoffeeCard from '../ui/CoffeeCard';
import CoffeeForm from '../ui/CoffeeForm';
import useCoffee from '../../hooks/useCoffee';

export default function CoffeePage(): JSX.Element {
  const [show, setShow] = useState(false);
  const { coffee, deleteHandler } = useCoffee();
  return (
    <>
      <Row className="mb-3">
      <Button
            style={{
              backgroundColor: '#e7e7e7',
              color: '#00005c',
              margin: '5%',
              boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
            }}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? 'Скрыть форму' : 'Добавить авторский кофе'} 
          </Button>
          {show && <CoffeeForm />}
      </Row>
      <Row className="mb-3">
        {coffee.map((el) => (
          <CoffeeCard key={el.id} onecoffee={el} deleteHandler={deleteHandler}/>
        ))}
      </Row>
    </>
  );
}
