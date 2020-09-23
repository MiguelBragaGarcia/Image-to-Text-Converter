const ConvertImageToText =require('./services/ProcessImageService') ;

const converter = new ConvertImageToText();
let convertedText = "";

 convertedText = converter.execute().then(text => text)

console.log(convertedText);
