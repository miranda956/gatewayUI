
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';


import "react-datetime/css/react-datetime.css";


export const GeneralInfoForm = ({onClose}) => {
  const [senderName, setSenderName] = useState("");


  const handleSaveAll = () => {
    onClose();
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your user name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Enter your password" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="senderName">
                <Form.Label>Sender Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter the sender Name" />           
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="callbackUrl">
                <Form.Label>Callback Url</Form.Label>
                <Form.Control required type="text" placeholder="Enter the callback Url" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="shortcode">
                <Form.Label>Short Code</Form.Label>
                <Form.Control required type="text" placeholder="Enter the short code" />
              </Form.Group>
            </Col>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+12-345 678 910" />
              </Form.Group>
            </Col> */}
          </Row>

          {/* <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter your home address" />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="city">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">State</option>
                  <option value="AL">Alabama</option>            
                  <option value="WY">Wyoming</option>
                </Form.Select>
              </Form.Group>
            </Col>
         
          {/* </Row> */}
          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={handleSaveAll}>Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};



export const UserSearch = ({onClose}) => {
  const [senderName, setSenderName] = useState("");
  const [selectedDate, setSelectedDate] =useState("")

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleClose = () => {
    onClose();
  };


  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Search</h5>
        <Form>
          <Row>
            <Col  md={4} className="mb-3">
              <Form.Group id="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your user name" />
              </Form.Group>
            </Col>
            <Col  md={4} className="mb-3">
              <Form.Group id="password">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="text" placeholder="Enter your phone number" />
              </Form.Group>
            </Col>
            <Col md={4} className="mb-3">
              <Form.Group id="password">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col md={4}  className="mb-3">
              <Form.Group id="password">
                <Form.Label>JOIN_DATE</Form.Label>
                <Datetime
                  value={selectedDate}
                  onChange={handleDateChange}
                  inputProps={{ placeholder: "Select a date" }}
                />
              </Form.Group>
            </Col>
            <Col md={4}  className="mb-3">
              <Form.Group className="mb-2">
                  <Form.Label>Role</Form.Label>
                  <Form.Select id="status" defaultValue="0">
                  <option value="empty"></option>  
                    <option value="AC">Manager</option>            
                    <option value="WY">Admin</option>
                  </Form.Select>
              </Form.Group>
            </Col>
          </Row> 

          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={handleClose}>Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const CreateMerchant = ({onClose}) => {
  const [senderName, setSenderName] = useState("");


  const handleSaveAll = () => {
    onClose();
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="userName">
                <Form.Label>User Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your user name" />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter your email" />           
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="text" placeholder="Enter your phone number" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            {/* <Col md={6} className="mb-3">
              <Form.Group id="senderName">
                <Form.Label>Sender Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter the sender Name" />           
              </Form.Group>
            </Col> */}
            {/* <Col md={6} className="mb-3">
              <Form.Group id="callbackUrl">
                <Form.Label>Callback Url</Form.Label>
                <Form.Control required type="text" placeholder="Enter the callback Url" />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            {/* <Col md={6} className="mb-3">
              <Form.Group id="shortcode">
                <Form.Label>Short Code</Form.Label>
                <Form.Control required type="email" placeholder="Enter the short code" />
              </Form.Group>
            </Col> */}
            {/* <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control required type="number" placeholder="+12-345 678 910" />
              </Form.Group>
            </Col> */}
          </Row>
          
          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={handleSaveAll}>Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};


