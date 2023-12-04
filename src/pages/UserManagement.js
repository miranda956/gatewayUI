import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown, ButtonGroup, DropdownButton } from "@themesberg/react-bootstrap";
import { CreateUser } from "../components/Forms";

import { UsersTable } from "../components/Tables";
import useItemClick from "../components/hooks/useItemClick";
import users from "../data/users";

import { useExports } from "../components/hooks/useExports";

export default () => {
  const { showForm, handleItemClick, closeForm, visibility } = useItemClick();
  const { exportCSV, exportPDF } = useExports();
  const usersHeaders = ["NAME", "PHONE", "EMAIL", "DURATION", "STATUS"];

  const usersData = users.map((u) => ({
    NAME: u.name,
    PHONE: u.phone,
    EMAIL: u.email,
    DURATION: u.joinDate,
    STATUS: u.status,
  }));

  const rows = users.map((u) => ({
    name: u.name,
    phone: u.phone,
    email: u.email,
    duration: u.joinDate,
    status: u.status,
  }));

  const columns = [
    { title: "NAME", dataKey: "name" },
    { title: "PHONE", dataKey: "phone" },
    { title: "EMAIL", dataKey: "email" },
    { title: "DURATION", dataKey: "duration" },
    { title: "STATUS", dataKey: "status" },
  ];

  const handleExportCSV = () => {
    exportCSV(usersData, usersHeaders, "users.csv");
  };

  const handleExportPDF = () => {
    exportPDF(rows, columns, "users");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2" onClick={() => handleItemClick(visibility)}>
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>New</span>
          </Dropdown.Toggle>
        </Dropdown>
        <ButtonGroup>
          <DropdownButton as={ButtonGroup} id="export-dropdown" title="Export" variant="outline-primary" size="sm">
            <Dropdown.Item onClick={handleExportPDF}>Export to Pdf</Dropdown.Item>
            <Dropdown.Divider></Dropdown.Divider>
            <Dropdown.Item onClick={handleExportCSV}>Export to Csv</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-primary" size="sm">
            Share
          </Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {showForm && <CreateUser onClose={closeForm} />}
        </Col>
      </Row>

      <UsersTable />
    </>
  );
};
