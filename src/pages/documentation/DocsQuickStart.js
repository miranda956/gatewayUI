import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container, Form, Button, Alert } from '@themesberg/react-bootstrap';

export default () => {
  const [userData, setUserData] = useState({
    username: '',
    merchantId: '',
    accountNo: ''
  });

  const [payerphone, setPayerPhone] = useState('');
  const [senderNames, setSenderNames] = useState('');
  const [narration, setNarration] = useState('');
  const [amount, setAmount] = useState('');


  // Simulating fetching user data from an endpoint
  useEffect(() => {
    // Fetch user data from an API endpoint
    // Example:
    // fetchUserData().then((data) => {
    //   setUserData({
    //     username: data.username,
    //     merchantId: data.merchantId,
    //     accountNo: data.accountNo
    //   });
    // }).catch((error) => {
    //   console.error('Error fetching user data: ', error);
    // });

    // Simulated data
    setUserData({
      username: 'Ronald Atsali',
      merchantId: '142653',
      accountNo: '7890123456'
    });
  }, []);

  const initiatePayment = () => {
    // Implement the logic to initiate payment using the entered details
    // Example:
    // initiatePaymentAPI(userData, payerphone, senderNames, narration).then((response) => {
    //   // Handle success
    // }).catch((error) => {
    //   // Handle error
    // });
    console.log('Initiating payment...');
  };

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="quick-start">STK PUSH </h1>

                <Form>
                  <Form.Group as={Row} className="mb-3" controlId="username">
                    <Form.Label column sm="2">Username</Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={userData.username} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="merchantId">
                    <Form.Label column sm="2">Merchant ID</Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={userData.merchantId} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="accountNo">
                    <Form.Label column sm="2">Account Number</Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={userData.accountNo} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="payerphone">
                    <Form.Label column sm="2">Payer Phone</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        value={payerphone}
                        onChange={(e) => setPayerPhone(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="senderNames">
                    <Form.Label column sm="2">Sender Names</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        value={senderNames}
                        onChange={(e) => setSenderNames(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="narration">
                    <Form.Label column sm="2">Narration</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={narration}
                        onChange={(e) => setNarration(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="amount">
                    <Form.Label column sm="2">Amount</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter the amount"
                      />
                    </Col>
                  </Form.Group>

                  <div className="mt-3">
                    <Button variant="primary" onClick={initiatePayment}>Initiate Payment</Button>
                  </div>
                </Form>
              </article>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
