const Tesseract = require('tesseract.js')

class ConvertImageToText {
   async  execute() {
    const response = await  Tesseract.recognize(
        'https://tesseract.projectnaptha.com/img/eng_bw.png',
        'eng');
    return response.data.text;
   }
}

module.exports = ConvertImageToText;