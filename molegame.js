const mole = document.getElementById("mole");

let isHungry = true;
let nextTime = Date.now();
function next() {
  if (Date.now() > nextTime) {
    if (isHungry) {
      mole.src = "./static/mole-game/mole-sad.png";
    } else {
      mole.src = "./static/mole-game/mole-hungry.png";
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 500;
  }
  requestAnimationFrame(next);
}
next();
