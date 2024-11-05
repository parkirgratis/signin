import {qrController,deleteCookie} from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.2.1/config.js";

import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js";
import {addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.9/element.js";

addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");

wauthparam.auth_ws="d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
//wauthparam.keyword="aHR0cHM6Ly93YS5tZS82Mjg5NTgwMDAwNjAwMD90ZXh0PXdoNHQ1YXV0aDA=";
wauthparam.keyword="aHR0cHM6Ly93YS5tZS82Mjg5OTk3MTAwNDA/dGV4dD13aDR0NWF1dGgw";
wauthparam.tokencookiehourslifetime=18;
wauthparam.redirect ="/dashboardinput"
deleteCookie(wauthparam.tokencookiename);
qrController(wauthparam);

document.getElementById("examplePopup").addEventListener("click", () => {
    Swal.fire({
        footer: 'Letak kamera WhatsApp',
        imageUrl: 'assets/img/camwab.jpg',
        imageWidth: 400,
        imageHeight: 300,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'rounded-md',
        }
    });
});
