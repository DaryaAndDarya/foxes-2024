import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCoffee from '../../hooks/useCoffee';

export default function CoffeeForm(): JSX.Element {

  return (
    <Form>
      <Form.Label className="mb-3">Название вашего авторского кофе</Form.Label>
      <Form.Control
        name="title"
        className="mb-3"
        style={{
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
      />

      <Form.Label className="mb-3">Напишите о кофе</Form.Label>
      <Form.Control
        name="desc"
        className="mb-3"
        style={{
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
      />

      <Form.Label className="mb-3">Почему именно этот кофе самый лучший</Form.Label>
      <Form.Control
        name="reason"
        className="mb-3"
        style={{
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
      />

      <Form.Label className="mb-3">Автор кофе</Form.Label>
      <Form.Control
        name="authorName"
        className="mb-3"
        style={{
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
      />

      <Form.Label className="mb-3">Ссылка на изображение кофе</Form.Label>
      <Form.Control
        name="url"
        style={{
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
      />

      <Button
        style={{
          backgroundColor: '#ffffff',
          color: '#00005c',
          margin: '5%',
          boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
        }}
        type="submit"
      >
        Отправить авторский кофе
      </Button>
    </Form>
  );
}
