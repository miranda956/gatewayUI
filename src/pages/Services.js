import React, { useState } from "react";
import { Row, Button, ButtonGroup, Dropdown, DropdownButton } from "@themesberg/react-bootstrap";
import { useExports } from "../components/hooks/useExports";
import { ServicesTable } from "../components/Tables";
import transactions from "../data/transactions";

export default () => {
  const [updatedTransactions] = useState(transactions);
  const { exportCSV, exportPDF } = useExports();

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
    exportPDF(rows, columns, "services");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-2 mb-md-0">
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
        <Row className="justify-content-between align-items-center"></Row>
      </div>

      <ServicesTable transactions={updatedTransactions} />
    </>
  );
};
