import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function CoffeeCard(): JSX.Element {

  return (
    <Col sm={6} className="mb-3">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src='https://www.anyluxury.ru/upload/images/stakan-dlya-kofe-eco-bamboo-oranzhevyy-foto2.jpeg' />
        <Card.Body>
          <Card.Title>Название</Card.Title>
          <Card.Text>Описание</Card.Text>
          <Card.Text>Автор кофе: </Card.Text>
          <Card.Text>Причина</Card.Text>
          <Button
            style={{
              backgroundColor: '#e7e7e7',
              color: '#00005c',
              margin: '5%',
              boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
            }}
          >
            Выпить полностью
          </Button>
          <Button
            style={{
              backgroundColor: '#e7e7e7',
              color: '#00005c',
              margin: '5%',
              boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
            }}
          >
            Буду брать каждый день
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
