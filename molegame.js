let score = 0;
const getSadInterval = () => Date.now() + 1000;
const getGoneInterval = () =>
  Date.now() + Math.floor(Math.random() * 18000) + 2000;
const getHungryInterval = () => Date.now() + 2000;
const getKingStatus = () => Math.random() > 0.9;
const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-0"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-1"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-2"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-3"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-4"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-5"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-6"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-7"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-8"),
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.getElementById("hole-9"),
  },
];

const getNextStatus = (mole) => {
  switch (mole.status) {
    case "sad":
    case "fed":
      mole.next = getSadInterval();
      mole.status = "leaving";
      if (mole.king) {
        mole.node.children[0].src = "./static/mole-game/king-mole-leaving.png";
      } else {
        mole.node.children[0].src = "./static/mole-game/mole-leaving.png";
      }
      break;
    case "leaving":
      mole.next = getGoneInterval();
      mole.status = "gone";
      mole.node.children[0].classList.add("gone");
      break;
    case "gone":
      mole.next = getHungryInterval();
      mole.status = "hungry";
      mole.king = getKingStatus();
      mole.node.children[0].classList.add("hungry");
      mole.node.children[0].classList.remove("gone");
      if (mole.king) {
        mole.node.children[0].src = "./static/mole-game/king-mole-hungry.png";
      } else {
        mole.node.children[0].src = "./static/mole-game/mole-hungry.png";
      }
      break;
    case "hungry":
      mole.next = getSadInterval();
      mole.status = "sad";
      mole.node.children[0].classList.remove("hungry");
      if (mole.king) {
        mole.node.children[0].src = "./static/mole-game/king-mole-sad.png";
      } else {
        mole.node.children[0].src = "./static/mole-game/mole-sad.png";
      }
      break;
  }
};

const feed = (e) => {
  if (e.target.tagName !== "IMG" || !e.target.classList.contains("hungry")) {
    return;
  }

  const mole = moles[parseInt(e.target.dataset.index)];
  mole.status = "fed";
  mole.next = getSadInterval();
  if (mole.king) {
    score += 2;
    mole.node.children[0].src = "./static/mole-game/king-mole-fed.png";
    mole.node.children[0].classList.remove("hungry");
  } else {
    score++;
    mole.node.children[0].src = "./static/mole-game/mole-fed.png";
    mole.node.children[0].classList.remove("hungry");
  }

  if (score >= 10) {
    win();
    return;
  }
  document.querySelector(".worm-container").style.width = `${10 * score}%`;
};

const win = () => {
  document.querySelector(".background").classList.add("hide");
  document.querySelector(".win").classList.remove("hide");
};

document.querySelector(".background").addEventListener("click", feed);

const nextFrame = () => {
  const now = Date.now();
  for (let i = 0; i < moles.length; i++) {
    if (moles[i].next < now) {
      getNextStatus(moles[i]);
    }
  }
  requestAnimationFrame(nextFrame);
};

requestAnimationFrame(nextFrame);
