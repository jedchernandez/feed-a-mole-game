const moles = document.getElementsByClassName("mole");

let isHungry = true;
let nextTime = Date.now();

function next() {
  if (Date.now() > nextTime) {
    if (isHungry) {
      for (const mole of moles) {
        mole.src = "./static/mole-game/mole-sad.png";
      }
    } else {
      for (const mole of moles) {
        mole.src = "./static/mole-game/mole-hungry.png";
      }
    }
    isHungry = !isHungry;
    nextTime = Date.now() + 500;
  }
  requestAnimationFrame(next);
}
next();
