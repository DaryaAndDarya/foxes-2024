import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setModal } from '../../redux/coffee/coffeeSlice';

export default function OrderModal(): React.ReactNode {
  const [message, setMessage] = useState<string>('Заказ готовится');
  const dispatch = useAppDispatch();
  const currentCoffee = useAppSelector((store) => store.coffee.currentCoffee);
  const handleClose = () => {
    dispatch(setModal({ coffeeType: '', size: 'Small', sugar: 0, milk: false }));
    setMessage('Заказ готовится');
  };

  useEffect(() => {
    let timeoutId: number;
    if (currentCoffee) {
      timeoutId = setTimeout(() => {
        setMessage('Все! Заказ готов!');
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentCoffee]);
  return (
    <Modal show={!!currentCoffee} onHide={handleClose} animation>
      <Modal.Header closeButton>
        <Modal.Title>{message}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={currentCoffee?.url} />
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Забрать
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
