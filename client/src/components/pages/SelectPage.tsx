import React from 'react';
import Row from 'react-bootstrap/Row';

export default function SelectPage(): JSX.Element {
  return (
    <>
      <Row className='mb-3'>Количество отобранных вами кофе:</Row>
      <Row>Список отобранных кофе</Row>
    </>
  );
}
