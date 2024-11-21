import {setCookieWithExpireHour,getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/cookie.js";
import {postJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/api.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/url.js";
import {addCSSInHead,addJSInHead} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.1.6/element.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';
   
   
await addCSSInHead("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");
   
const url="https://asia-southeast2-awangga.cloudfunctions.net/bukupedia/auth/users";
   
const client_id="239713755402-4hr2cva377m43rsqs2dk0c7f7cktfeph.apps.googleusercontent.com";
   
// Panggil fungsi untuk menambahkan elemen
appendGoogleSignin(client_id,url);