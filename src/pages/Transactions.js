import React, { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "@themesberg/react-bootstrap";
import transactions from "../data/transactions";
import { TransactionsTable } from "../components/Tables";
import { useExports } from "../components/hooks/useExports";
export default () => {
  const [exporting] = useState(false);
  const { exportCSV, exportPDF } = useExports();

  const transactionsHeaders = ["MERCHANT_ID", "TRANSACTION_ID", "SERVICE", "ACCOUNT", "DATE", "AMOUNT", "STATUS"];

  const transactionsData = transactions.map((t) => ({
    MERCHANT_ID: t.merchantId,
    TRANSACTION_ID: t.transactionId,
    SERVICE: t.service,
    ACCOUNT: t.account,
    DATE: t.date,
    AMOUNT: t.amount,
    STATUS: t.status,
  }));

  const rows = transactions.map((t) => ({
    merchantId: t.merchantId,
    transactionId: t.transactionId,
    service: t.service,
    account: t.account,
    date: t.date,
    amount: t.amount,
    status: t.status,
  }));

  const columns = [
    { title: "MERCHANT_ID", dataKey: "merchantId" },
    { title: "TRANSACTION_ID", dataKey: "transactionId" },
    { title: "SERVICE", dataKey: "service" },
    { title: "ACCOUNT", dataKey: "account" },
    { title: "DATE", dataKey: "date" },
    { title: "AMOUNT", dataKey: "amount" },
    { title: "STATUS", dataKey: "status" },
  ];

  const handleExportCSV = () => {
    exportCSV(transactionsData, transactionsHeaders, "transactions.csv");
  };

  const handleExportPDF = () => {
    exportPDF(rows, columns, "transactions.pdf");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h4>Transactions</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <DropdownButton as={ButtonGroup} id="export-dropdown" title="Export" variant="outline-primary" size="sm" disabled={exporting}>
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

      <div className="table-settings mb-4"></div>

      <TransactionsTable isAdmin={true} />
    </>
  );
};
