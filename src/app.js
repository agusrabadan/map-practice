/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function () {

  let palo = ["♠", "♥", "♣", "♦"];
    
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let text = " "
  palo.map((element) => {
    numero.map((item) => {
      let color;
        if(element ==="♥" || element ==="♦"){
          color="text-danger";
        }
      
      text +=
      `
      <div class="card mb-4 mx-3" style="width: 160px;height: 200px;">
        <div class="card-body">
          <h5 class="card-title ${color} align-start d-flex">${item}${element}</h5>
          <img src="https://i.pinimg.com/736x/7b/45/63/7b45638064e62f2e584777e170c53be0.jpg" class="card-img-top" alt="..." style="width: 100px;height: 120px;">
          <h5 class="card-title ${color} d-flex">${item}${element}</h5>
        </div>
      </div>
      `
    })
  })
      
  const pokerCards = document.querySelector('#cartas')
  pokerCards.innerHTML = text
  
  };