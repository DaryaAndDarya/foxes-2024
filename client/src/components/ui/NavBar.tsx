import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" data-bs-theme="light" className="mb-3">
      <Container>
        <Navbar.Brand>ЭльбКофе</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            {' '}
            Это все про кофе{' '}
          </NavLink>
          <NavLink className="nav-link" to="/select">
            {' '}
            Отобранный кофе{' '}
          </NavLink>
          <NavLink className="nav-link" to="/coffeemachine">
            {' '}
            Кофейный аппарат{' '}
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
