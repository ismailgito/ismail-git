import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message:"Type your URL",
    name :"URL"
  }])
  .then((answers) => {
    const url=answers.URL
    var qr_scan=qr.image(url);
    var qrCode=fs.createWriteStream("image.png")
    qr_scan.pipe(qrCode);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });