let button = document.querySelector(".button-box");
let nav = document.querySelector(".nav-footer");

let contador = 1;

button.addEventListener("click", function () {

  if (contador === 1) {
    nav.style.display = "flex";
  }

  if (contador > 1) {
    contador = 0;
  }

  if (contador === 0) {
    nav.style.display = "none";
  }

  contador++;


  console.log(contador);
});
