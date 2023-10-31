import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container, Form, Button } from '@themesberg/react-bootstrap';

export default () => {
  const [userData, setUserData] = useState({
    clientId: '142653',
    serviceId: 'B2C_SERVICE',
    senderNames: 'Patrick Maina',
    accountNo: '748999400'
  });

  const [receivers, setReceivers] = useState([{ phone: '', amount: '' }]);

  useEffect(() => {
    // Fetch user data from an API endpoint
    // Simulated data
    setUserData({
      clientId: '142653',
      serviceId: 'B2C_SERVICE',
      senderNames: 'Patrick Maina',
      accountNo: '748999400'
    });
  }, []);

  const handlePhoneChange = (index, phone) => {
    const updatedReceivers = [...receivers];
    updatedReceivers[index].phone = phone;
    setReceivers(updatedReceivers);
  };

  const handleAmountChange = (index, amount) => {
    const updatedReceivers = [...receivers];
    updatedReceivers[index].amount = amount;
    setReceivers(updatedReceivers);
  };

  const addReceiver = () => {
    setReceivers([...receivers, { phone: '', amount: '' }]);
  };

  const removeReceiver = (index) => {
    const updatedReceivers = [...receivers];
    updatedReceivers.splice(index, 1);
    setReceivers(updatedReceivers);
  };

  const submitBulkPayment = () => {
    // Implement logic to submit bulk payment with receiver phone numbers and amounts
    console.log('Submitting bulk payment...');
    console.log('Receivers:', receivers);
    // Example:
    // submitBulkPaymentAPI(userData, receivers).then((response) => {
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
                <h1 className="h2" id="download">B2C HERE</h1>

                <Form>
                  {userData && (
                    <div>
                      <p>Client ID: {userData.clientId}</p>
                      <p>Service ID: {userData.serviceId}</p>
                      <p>Sender Name: {userData.senderNames}</p>
                      <p>Account Number: {userData.accountNo}</p>
                    </div>
                  )}

                  {receivers.map((receiver, index) => (
                    <div key={index}>
                      <Form.Group>
                        <Form.Label>Receiver Phone</Form.Label>
                        <Form.Control
                          type="text"
                          value={receiver.phone}
                          onChange={(e) => handlePhoneChange(index, e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                          type="text"
                          value={receiver.amount}
                          onChange={(e) => handleAmountChange(index, e.target.value)}
                        />
                      </Form.Group>

                      <Button variant="danger" onClick={() => removeReceiver(index)}>Remove </Button>
                    </div>
                  ))}

                  <Button variant="primary" onClick={addReceiver}>Add Receiver</Button>

                  <Button variant="success" onClick={submitBulkPayment}>Send Payment</Button>
                </Form>
              </article>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
