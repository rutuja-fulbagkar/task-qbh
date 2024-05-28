const PDFDocument = require('pdfkit');

function generateUserPdf(user) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    doc.fontSize(25).text('User Information', { align: 'center' });
    doc.fontSize(12).text(`Name: ${user.name}`);
    doc.fontSize(12).text(`Email: ${user.email}`);
    doc.fontSize(12).text(`Phone: ${user.phnno}`);
    doc.fontSize(12).text(`Address: ${user.address}`);
    doc.moveDown();

    doc.end();
  });
}

module.exports = {
  generateUserPdf
};
