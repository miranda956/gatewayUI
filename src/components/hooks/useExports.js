import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";

export const useExports = () => {
  const exportCSV = (data, headers, fileName) => {
    const csv = Papa.unparse({ data, fields: headers });
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  //Export data to PDF
  const exportPDF = (rows, columns, fileName) => {
    const pdf = new jsPDF();
    const capitalizedFileName = fileName.toUpperCase();
    pdf.text(capitalizedFileName, 10, 10);

    pdf.autoTable(columns, rows);
    pdf.save(`${fileName}.pdf`);
  };

  return { exportCSV, exportPDF };
};
