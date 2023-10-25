/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  randomCard();
  let generateButton = document.getElementById("generate");
  generateButton.addEventListener("click", function() {
    randomCard();
  });
  function randomCard() {
    let palo = ["♦", "♥", "♠", "♣"];
    let numero = ["A", 2, 3, 4, 5, 6, 7, 8, 10, "J", "Q", "K"];
    let numeroAleatorio = numero[Math.floor(Math.random() * numero.length)];
    let paloAleatorio = palo[Math.floor(Math.random() * palo.length)];
    if (paloAleatorio === "♥" || paloAleatorio === "♦") {
      document.getElementsByClassName("palo")[0].style.color = "red";
      document.getElementsByClassName("palo")[1].style.color = "red";
    } else {
      document.getElementsByClassName("palo")[0].style.color = "black";
      document.getElementsByClassName("palo")[1].style.color = "black";
    }
    document.getElementsByClassName("palo")[0].innerHTML = paloAleatorio;
    document.getElementsByClassName("palo")[1].innerHTML = paloAleatorio;
    document.getElementById("numero").innerHTML = numeroAleatorio;
  }
};
