const moles = document.getElementsByClassName("mole");

let isHungry = true;
let nextTime = Date.now();

function next() {
  if (Date.now() > nextTime) {
    if (isHungry) {
      for (const mole of moles) {
        mole.src = "";
        mole.alt = "";
      }
    } else {
      for (const mole of moles) {
        mole.src = "./static/mole-game/mole-hungry.png";
      }
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 2000;
  }
  requestAnimationFrame(next);
}
next();
