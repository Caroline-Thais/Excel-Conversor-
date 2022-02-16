var pdf = require("html-pdf");

class Pdfwriter{

    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err) => {});
    }
}

module.exports = Pdfwriter;