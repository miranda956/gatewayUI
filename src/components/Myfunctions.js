import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import transactions from "../data/transactions";
import React from "react";
import "jspdf-autotable";
import Papa from "papaparse";

export const exportCSV = (data, headers, fileName) => {
  const csv = Papa.unparse({ data, fields: headers });
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

//Export data to PDF
export const exportPDF = (rows, columns) => {
  const pdf = new jsPDF();
  pdf.text("Services Report", 10, 10);

  pdf.autoTable(columns, rows);
  pdf.save("services_report.pdf");
};
