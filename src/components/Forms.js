
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


export const GeneralInfoForm = () => {
  const [birthday, setBirthday] = useState("");

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Channel</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="usernames">
                <Form.Label>Name </Form.Label>
                <Form.Control required type="text" placeholder="channel name" />
              </Form.Group>
            </Col>
            

            <Col md={6} className="mb-3">
              <Form.Group id="UserName">
                <Form.Label>UserName</Form.Label>
                <Form.Control required type="text" placeholder="Username" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
           
            
          </Row>
          <Row>
            
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label> Url</Form.Label>
                <Form.Control required type="text" placeholder="result url" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="password" />
              </Form.Group>
            </Col>
          </Row>

          
         
          <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
