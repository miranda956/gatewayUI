// SendMailModal.js
import React, { useState } from "react";
import { Modal, Form, Button } from "@themesberg/react-bootstrap";

const SendMailModal = ({ show, onClose, onSend, email }) => {
  const [messageBody, setMessageBody] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSendMail = () => {
    const apiUrl = "https://api/api";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        message: messageBody,
        attachment: attachment,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Email sent successfully:", data);

        onSend();
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
      });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Mail to {email}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formMessageBody">
            <Form.Label>Message Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFileAttachment">
            <Form.Label className="mt-4">File Attachment</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSendMail}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendMailModal;
