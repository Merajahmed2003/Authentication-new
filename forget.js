import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const form = document.querySelector("form");
const emaill = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Working");

  sendPasswordResetEmail(auth, emaill.value)
    .then(() => {
      console.log("Email send");

      setTimeout(() => {
        window.location = "./login.html";
      }, 2000);
    })
    .catch((error) => {

      console.log(error);
    });
});
