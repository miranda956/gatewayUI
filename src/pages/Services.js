import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, DropdownButton } from "@themesberg/react-bootstrap";
import { exportCSV, exportPDF, handleExportCSV, handleExportPDF } from "../components/Myfunctions";
import { ServicesTable } from "../components/Tables";
import transactions from "../data/transactions";

export default () => {
  const [updatedTransactions, setUpdatedTransactions] = useState(transactions);
  const servicesHeaders = ["MERCHANT_ID", "SERVICE_ID", "DESCRIPTION", "DURATION", "STATUS"];

  const servicesData = transactions.map((t) => ({
    MERCHANT_ID: t.merchantId,
    SERVICE_ID: t.transactionId,
    DESCRIPTION: t.service,
    DURATION: t.account,
    STATUS: t.status,
  }));

  const rows = transactions.map((t) => ({
    merchantId: t.merchantId,
    transactionId: t.transactionId,
    service: t.service,
    account: t.account,
    status: t.status,
  }));

  const columns = [
    { title: "MERCHANT_ID", dataKey: "merchantId" },
    { title: "SERVICE_ID", dataKey: "transactionId" },
    { title: "DESCRIPTION", dataKey: "service" },
    { title: "DURATION", dataKey: "account" },
    { title: "STATUS", dataKey: "status" },
  ];

  const handleExportCSV = () => {
    exportCSV(servicesData, servicesHeaders, "services.csv");
  };

  const handleExportPDF = () => {
    exportPDF(rows, columns);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-2 mb-md-0">
          {/* <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
            </Breadcrumb> */}
          <h4>Services</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
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
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          {/* <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col> */}
          {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
        </Row>
      </div>

      <ServicesTable transactions={updatedTransactions} />
    </>
  );
};
