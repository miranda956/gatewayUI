import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container, Form, Button } from '@themesberg/react-bootstrap';

export default () => {
  const [userData, setUserData] = useState({
    clientId: '142653',
    serviceId: 'B2B_BUYGOODS_SERVICE',
    senderNames: 'Patrick Maina',
    shortCode: '898089'
  });

  const [accountNo, setAccountNo] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [narration, setNarration] = useState('');

  useEffect(() => {
    // Fetch user data from an API endpoint
    // Simulated data
    setUserData({
      clientId: '142653',
      serviceId: 'B2B_BUYGOODS_SERVICE',
      senderNames: 'Patrick Maina',
      shortCode: '898089'
    });
  }, []);

  const submitB2BPayment = () => {
    // Implement logic to submit B2B payment with the provided fields
    console.log('Submitting B2B payment...');
    console.log('Account No:', accountNo);
    console.log('Receiver Phone:', receiverPhone);
    console.log('Amount:', amount);
    console.log('Narration:', narration);
    // Example:
    // submitB2BPaymentAPI(userData, accountNo, receiverPhone, amount, narration).then((response) => {
    //   // Handle success
    // }).catch((error) => {
    //   // Handle error
    // });
  };

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <article>
                <h1 className="h2" id="overview">B2B </h1>

                <Form>
                  {userData && (
                    <div>
                      <p>Client ID: {userData.clientId}</p>
                      <p>Service ID: {userData.serviceId}</p>
                      <p>Sender Name: {userData.senderNames}</p>
                      <p>Short Code: {userData.shortCode}</p>
                    </div>
                  )}

                  <Form.Group>
                    <Form.Label>Account No</Form.Label>
                    <Form.Control
                      type="text"
                      value={accountNo}
                      onChange={(e) => setAccountNo(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Receiver Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={receiverPhone}
                      onChange={(e) => setReceiverPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Narration</Form.Label>
                    <Form.Control
                      type="text"
                      value={narration}
                      onChange={(e) => setNarration(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" onClick={submitB2BPayment}>Send Payment</Button>
                </Form>
              </article>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
