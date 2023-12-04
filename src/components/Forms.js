import React, { useState } from "react";
import Datetime from "react-datetime";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import validator from "validator";
import "react-datetime/css/react-datetime.css";

const FormField = ({ id, label, placeholder, type, value, onChange, isInvalid, errorMessage, children }) => (
  <Col md={6} className="mb-3">
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      {type === "select-one" ? (
        <Form.Select id={id} value={value} onChange={onChange} isInvalid={isInvalid}>
          {children}
        </Form.Select>
      ) : (
        <Form.Control type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} isInvalid={isInvalid} />
      )}
      <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
    </Form.Group>
  </Col>
);

export const GeneralInfoForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    senderName: "",
    callbackUrl: "",
    shortCode: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    ["userName", "password", "senderName", "callbackUrl", "shortCode"].forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);

    return isValid;
  };

  const handleSaveAll = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form>
          <Row>
            <FormField
              id="userName"
              label="User Name"
              placeholder="Enter username"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              isInvalid={!!errors.userName}
              errorMessage={errors.userName}
            />
            <FormField
              id="password"
              label="Password"
              placeholder="Enter password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              errorMessage={errors.password}
            />
          </Row>
          <Row className="align-items-center">
            <FormField
              id="senderName"
              label="Sender Name"
              placeholder="Enter senderName"
              type="text"
              value={formData.senderName}
              onChange={handleChange}
              isInvalid={!!errors.senderName}
              errorMessage={errors.senderName}
            />
            <FormField
              id="callbackUrl"
              label="Callback Url"
              placeholder="Paste callbackUrl here"
              type="text"
              value={formData.callbackUrl}
              onChange={handleChange}
              isInvalid={!!errors.callbackUrl}
              errorMessage={errors.callbackUrl}
            />
          </Row>
          <Row>
            <FormField
              id="shortCode"
              label="Short Code"
              placeholder="Paste shortcode here"
              type="text"
              value={formData.shortCode}
              onChange={handleChange}
              isInvalid={!!errors.shortCode}
              errorMessage={errors.shortCode}
            />
          </Row>

          <div className="mt-3">
            <Button variant="primary" onClick={handleSaveAll}>
              Save All
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const CreateUser = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    ["userName", "phone", "email", "role"].forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);

    return isValid;
  };

  const handleSaveAll = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = e.target.type === "select-one" ? e.target.value : value;
    setFormData((prevData) => ({ ...prevData, [id]: newValue }));
  };

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">User Profile</h5>
        <Form>
          <Row>
            <FormField
              id="userName"
              label="User Name"
              placeholder="Enter username"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              isInvalid={!!errors.userName}
              errorMessage={errors.userName}
            />

            <FormField
              id="phone"
              label="Phone"
              placeholder="Enter phone number"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone}
            />
            <FormField
              id="email"
              label="Email"
              placeholder="Enter email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
            />
            <FormField
              id="role"
              label="Role"
              placeholder="Select Role"
              type="select-one"
              value={formData.role}
              onChange={handleChange}
              isInvalid={!!errors.role}
              errorMessage={errors.role}>
              <option value="">Select Role</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </FormField>
          </Row>

          <div className="mt-3">
            <Button variant="primary" onClick={handleSaveAll}>
              Save All
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export const CreateMerchant = ({ onClose }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    ["userName", "email", "phone"].forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);

    return isValid;
  };

  const handleSaveAll = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Merchant Profile</h5>
        <Form>
          <Row>
            <FormField
              id="userName"
              label="User Name"
              placeholder="Enter username"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              isInvalid={!!errors.userName}
              errorMessage={errors.userName}
            />

            <FormField
              id="email"
              label="Email"
              placeholder="Enter email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
            />

            <FormField
              id="phone"
              label="Phone "
              placeholder="Enter phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone}
            />
          </Row>
          <Row className="align-items-center"></Row>
          <Row></Row>

          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={handleSaveAll}>
              Save All
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
