import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const p = document.createElement("p")
  p.id = "excuse"
  console.log(p)
  const wrapper = document.getElementsByClassName("wrapper")[0]
  const button = document.querySelector("button")

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];




  function getRandomElement(list){
    return list[Math.floor(Math.random() * list.length)]
  }

  button.onclick = function generateExcuse(){
    wrapper.appendChild(p)
    let myExcuse = ""

    for (let words of [who, action, what, when]){
      myExcuse += (" " + getRandomElement(words))
    }
    p.innerHTML = myExcuse.trimStart() + ".";
  }

};
