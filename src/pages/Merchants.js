import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown, ButtonGroup, DropdownButton } from "@themesberg/react-bootstrap";
import { CreateMerchant } from "../components/Forms";
import { MerchantTable } from "../components/Tables";
import useItemClick from "../components/hooks/useItemClick";
import users from "../data/users";
import { useExports } from "../components/hooks/useExports";
export default () => {
  const { showForm, handleItemClick, closeForm, visibility } = useItemClick();
  const { exportCSV, exportPDF } = useExports();

  const usersHeaders = ["MERCHANT_ID", "NAME", "PHONE", "EMAIL", "STATUS", "LAST_LOGIN"];

  const usersData = users.map((u) => ({
    MERCHANT_ID: u.id,
    NAME: u.name,
    PHONE: u.phone,
    EMAIL: u.email,
    STATUS: u.status,
    LAST_LOGIN: u.lastLogin,
  }));

  const rows = users.map((u) => ({
    id: u.id,
    name: u.name,
    phone: u.phone,
    email: u.email,
    status: u.status,
    lastLogin: u.lastLogin,
  }));

  const columns = [
    { title: "MERCHANT_ID", dataKey: "id" },
    { title: "NAME", dataKey: "name" },
    { title: "PHONE", dataKey: "phone" },
    { title: "EMAIL", dataKey: "email" },
    { title: "STATUS", dataKey: "status" },
    { title: "LAST_LOGIN", dataKey: "lastLogin" },
  ];

  const handleExportCSV = () => {
    exportCSV(usersData, usersHeaders, "merchants.csv");
  };

  const handleExportPDF = () => {
    exportPDF(rows, columns, "merchants");
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
          {showForm && <CreateMerchant onClose={closeForm} />}
        </Col>
      </Row>

      <MerchantTable />
    </>
  );
};
