import calculadora from "./modules/calculadora.js";

const display = document.querySelector("[data-display]");
const elements = document.querySelectorAll("[data-digit]");

calculadora(display, elements);

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });
