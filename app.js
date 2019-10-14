const fs = require("fs"),
  path = require("path"),
  pdfPoppler = require("pdf-poppler"),
  Tesseract = require("tesseract.js"),
  PDFParser = require("pdf2json");

let filePath = "C:\\Users\\junehyok.cho\\Desktop\\Personal\\0. Github\\pdf-ocr\\2395544244_CD_1.pdf"

let options = {
  format: "jpeg",
  out_dir: path.dirname(filePath),
  out_prefix: path.basename(filePath, path.extname(filePath)),
  page: null
}

// Convert Either to JPEG or PNG
// pdfPoppler.convert(filePath, options).then(result => {
//   console.log("Successfully Converted");
// })

// Tesseract.recognize("C:\\Users\\junehyok.cho\\Desktop\\Personal\\0. Github\\pdf-ocr\\helloworld.png", {
//   lang: "deu"
// }).then((result) => {
//   console.log(result.blocks[0].text)
// })

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataReady", pdfData => {
  fs.writeFile("./2395540825_CD_1.json", JSON.stringify(pdfData), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

pdfParser.loadPDF("./2395540825_CD_1.pdf");