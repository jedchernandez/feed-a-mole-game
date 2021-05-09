let number;
const result = document.querySelector(".result");

document.querySelector(".clickme").addEventListener("click", function (event) {
  buttonClick(event.target.tagName);
});

const then = Date.now();
console.log(then);
function buttonClick() {
  // Generates a random number between 2 and 20
  number = Math.floor(Math.random() * 18) + 2;
  result.innerText = number;
  console.log(Date.now() - then);
}
// setting timeouts - timer every nth seconds (1000ms = 1 sec)
setTimeout(function () {
  console.log("hey timer");
}, 2000);

// setting timeouts every nth seconds = setInterval also cancelling
let num = 1;
const jsinterval = setInterval(function () {
  num++;
  console.log(num, "hey interval");
}, 500);

setTimeout(function () {
  clearInterval(jsinterval);
}, 5000);
/* ^ old way cause it's easier
    new way = requestAnimationFrame :
    asks the browser that next time you're not executing something, 
    run this for me
    Advantage 1: Better performance. No need to force the browser to stop.
    Advantage 2: Pauses automatically when user tabs out from the involved browser
*/

// mole exercise
// const moles = document.getElementsByClassName("mole");

// let isHungry = true;
// let nextTime = Date.now();

// function next() {
//   if (Date.now() > nextTime) {
//     if (isHungry) {
//       for (const mole of moles) {
//         mole.src = "";
//         mole.alt = "";
//       }
//     } else {
//       for (const mole of moles) {
//         mole.src = "./static/mole-game/mole-hungry.png";
//       }
//     }
//     isHungry = !isHungry;
//     nextTime = Date.now() + 2000;
//   }
//   requestAnimationFrame(next);
// }
// next();
