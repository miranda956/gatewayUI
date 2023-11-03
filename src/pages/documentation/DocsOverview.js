
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';
import { ServicesTable } from '../../components/Tables';



export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>

       
          <Card.Body>
         
          <h1 className="h2" id="overview">Service Reports</h1>
              
                < ServicesTable />
              
            
     
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
