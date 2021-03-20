import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap/lib/tab';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Container>
  <Row>
    <Link to='\xyz'></Link>
  </Row>
  <Row>
  <Link to='\xyz'></Link>
  </Row>
  <Row>
  <Link to='\xyz'></Link>
  </Row>
  <Row>
  <Link to='\xyz'></Link>
  </Row>
</Container>
        </div>
    );
};

export default Navbar;