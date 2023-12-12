import {Container, Nav, Navbar} from "react-bootstrap"

import React from 'react';

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="/index">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/list">MovieList</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            </Nav>
        </Container>
        </Navbar>
    );
};

export default Navigation;