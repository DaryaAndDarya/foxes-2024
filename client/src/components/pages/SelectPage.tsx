import React from 'react';
import Row from 'react-bootstrap/Row';
import { useAppSelector } from '../../hooks/hook';
import CoffeeCard from '../ui/CoffeeCard';

export default function SelectPage(): JSX.Element {
  const selectedCoffee = useAppSelector((store) => store.coffee.selectedCoffee);
  return (
    <>
      <Row className='mb-3'>Количество отобранных вами кофе: {selectedCoffee.length}</Row>
      <Row>Список отобранных кофе</Row>
      <Row>
        {selectedCoffee.map((el) => (
          <CoffeeCard key={el.id} onecoffee={el} />
        ))}
      </Row>
    </>
  );
}
