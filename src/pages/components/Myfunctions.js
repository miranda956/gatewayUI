// exportUtils.js
import jsPDF from 'jspdf';
import { fn } from 'moment-timezone';




export function exportToCSV(data) {
    const csvContent = 'data:text/csv;charset=utf-8,' + convertToCSV(data);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'transactions.csv');
    document.body.appendChild(link);
    link.click();
  }
  
  function convertToCSV(data) {
    const header = ['Transaction ID', 'Service', 'Account', 'Date', 'Amount', 'Status'];
    const csvRows = [header.join(',')];
  
    data.forEach(item => {
      const row = [
        item.transactionId,
        item.service,
        item.account,
        item.date,
        item.amount,
        item.status
      ];
      csvRows.push(row.join(','));
    });
  
    return csvRows.join('\n');
  }
  

  // exportUtils.js

export function exportToPDF(data) {
  const doc = new jsPDF();
  doc.text('Transactions Report', 10, 10);
  doc.autoTable({
    head: [['Transaction ID', 'Service', 'Account', 'Date', 'Amount', 'Status']],
    body: data.map(item => [
      item.transactionId,
      item.service,
      item.account,
      item.date,
      item.amount,
      item.status
    ]),
  });
  doc.save('transactions.pdf');
}



