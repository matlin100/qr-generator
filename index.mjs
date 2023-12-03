
"use strict";"module";

$(document).ready(function () {
    $("h1").text("test");
});

import qr from "qr-image"; // Using a CDN for the browser-compatible version
import { saveAs } from 'file-saver'; // Assuming you want to save the file on the client side
import $ from 'jquery';
const generateQRCode = () => {
    var inputValue = $('#inputText').val();
    var qr_svg = qr.image(inputValue, { type: 'png' }); // Specify the image type

    // Convert the SVG data to a Blob
    qr_svg.getBase64((dataURL) => {
        var blob = dataURLtoBlob(dataURL);

        // Save the Blob as a file using FileSaver.js
        saveAs(blob, 'qr_img.png');
    });

    var img = $('#qrImage');
    img.attr('src', './qr_img.png');
};

const click = () => {
    
    console.log("test")
};


export { click };
