var cell = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
var score = 0;
var colour = {
  2: "orange",
  4: "red",
  8: "yellow",
  16: "pink",
  32: "violet",
  64: "purple",
  128: "aqua",
  256: "brown",
  512: "chocolate",
  1024: "magenta",
  2048: "grey",
  4096: "honeydew",
};
var turn_counter = 0;
function random_generator() {
  let randid;
  do {
    let ranrow = Math.floor(Math.random() * 4);
    let rancol = Math.floor(Math.random() * 4);
    randid = 4 * ranrow + rancol;
  } while (cell[randid] != null);
  cell[randid] = 2;
  document.getElementById(randid).innerHTML = 2;
  document.getElementById(randid).style.backgroundColor = "orange";
  document.getElementById("header").innerHTML = `Score: ${score}`;
}
function move(event) {
  let key = event.key;
  if (key == "ArrowDown") {
    downpossible();
  } else if (key == "ArrowUp") {
    uppossible();
  } else if (key == "ArrowLeft") {
    leftpossible();
  } else if (key == "ArrowRight") {
    rightpossible();
  }
  turn_counter++;
}
function mobile(num) {
  if (num == 4) downpossible();
  else if (num == 1) uppossible();
  else if (num == 2) leftpossible();
  else if (num == 3) rightpossible();
  turn_counter++;
}
function down() {
  let check = 0;
  for (let row = 3; row > 0; row--, check++) {
    for (let col = 3; col >= 0; col--) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id - 4] != null) {
        cell[id] = cell[id - 4];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 4).innerHTML = "";
        document.getElementById(id - 4).style.backgroundColor = "#38E54D";
        cell[id - 4] = null;
      } else if (cell[id] == null && cell[id - 8] != null) {
        cell[id] = cell[id - 8];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 8).innerHTML = "";
        document.getElementById(id - 8).style.backgroundColor = "#38E54D";
        cell[id - 8] = null;
      } else if (cell[id] == null && cell[id - 12] != null) {
        cell[id] = cell[id - 12];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 12).innerHTML = "";
        document.getElementById(id - 12).style.backgroundColor = "#38E54D";
        cell[id - 12] = null;
      }
    }
  }
  for (let row = 3; row > 0; row--, check++) {
    for (let col = 3; col >= 0; col--) {
      let id = 4 * row + col;
      if (cell[id] == cell[id - 4] && cell[id - 4] != null) {
        document.getElementById(id).innerHTML = cell[id - 4] + cell[id];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 4] + cell[id]];
        score += cell[id - 4] + cell[id];
        cell[id] = cell[id - 4] + cell[id];
        cell[id - 4] = null;
        document.getElementById(id - 4).innerHTML = "";
        document.getElementById(id - 4).style.backgroundColor = "#38E54D";
      }
    }
  }
  for (let row = 3; row > 0; row--, check++) {
    for (let col = 3; col >= 0; col--) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id - 4] != null) {
        cell[id] = cell[id - 4];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 4).innerHTML = "";
        document.getElementById(id - 4).style.backgroundColor = "#38E54D";
        cell[id - 4] = null;
      } else if (cell[id] == null && cell[id - 8] != null) {
        cell[id] = cell[id - 8];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 8).innerHTML = "";
        document.getElementById(id - 8).style.backgroundColor = "#38E54D";
        cell[id - 8] = null;
      } else if (cell[id] == null && cell[id - 12] != null) {
        cell[id] = cell[id - 12];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id - 12).innerHTML = "";
        document.getElementById(id - 12).style.backgroundColor = "#38E54D";
        cell[id - 12] = null;
      }
    }
  }
}
function up() {
  let check = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id + 4] != null) {
        cell[id] = cell[id + 4];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 4).innerHTML = "";
        document.getElementById(id + 4).style.backgroundColor = "#38E54D";
        cell[id + 4] = null;
      } else if (cell[id] == null && cell[id + 8] != null /* && check < 1*/) {
        cell[id] = cell[id + 8];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 8).innerHTML = "";
        document.getElementById(id + 8).style.backgroundColor = "#38E54D";
        cell[id + 8] = null;
      } else if (cell[id] == null && cell[id + 12] != null /* && check < 2*/) {
        cell[id] = cell[id + 12];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 12).innerHTML = "";
        document.getElementById(id + 12).style.backgroundColor = "#38E54D";
        cell[id + 12] = null;
      }
    }
  }

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let id = 4 * row + col;
      if (cell[id] == cell[id + 4] && cell[id + 4] != null) {
        document.getElementById(id).innerHTML = cell[id + 4] + cell[id];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id + 4] + cell[id]];
        score += cell[id + 4] + cell[id];
        cell[id] = cell[id + 4] + cell[id];
        cell[id + 4] = null;
        document.getElementById(id + 4).innerHTML = "";
        document.getElementById(id + 4).style.backgroundColor = "#38E54D";
      }
    }
  }
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id + 4] != null) {
        cell[id] = cell[id + 4];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 4).innerHTML = "";
        document.getElementById(id + 4).style.backgroundColor = "#38E54D";
        cell[id + 4] = null;
      } else if (cell[id] == null && cell[id + 8] != null /* && check < 1*/) {
        cell[id] = cell[id + 8];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 8).innerHTML = "";
        document.getElementById(id + 8).style.backgroundColor = "#38E54D";
        cell[id + 8] = null;
      } else if (cell[id] == null && cell[id + 12] != null /* && check < 2*/) {
        cell[id] = cell[id + 12];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 12).innerHTML = "";
        document.getElementById(id + 12).style.backgroundColor = "#38E54D";
        cell[id + 12] = null;
      }
    }
  }
}
function left() {
  let check = 0;
  for (let col = 0; col < 3; col++, check++) {
    for (let row = 0; row <= 3; row++) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id + 1] != null) {
        cell[id] = cell[id + 1];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 1).innerHTML = "";
        document.getElementById(id + 1).style.backgroundColor = "#38E54D";
        cell[id + 1] = null;
      } else if (cell[id] == null && cell[id + 2] != null && check <= 1) {
        cell[id] = cell[id + 2];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 2).innerHTML = "";
        document.getElementById(id + 2).style.backgroundColor = "#38E54D";
        cell[id + 2] = null;
      } else if (cell[id] == null && cell[id + 3] != null && check < 1) {
        cell[id] = cell[id + 3];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 3).innerHTML = "";
        document.getElementById(id + 3).style.backgroundColor = "#38E54D";
        cell[id + 3] = null;
      }
    }
  }
  for (let col = 0; col < 3; col++, check++) {
    for (let row = 0; row <= 3; row++) {
      let id = 4 * row + col;
      if (cell[id] == cell[id + 1] && cell[id + 1] != null) {
        document.getElementById(id).innerHTML = cell[id] + cell[id + 1];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id] + cell[id + 1]];
        score += cell[id + 1] + cell[id];
        cell[id] += cell[id + 1];
        cell[id + 1] = null;
        document.getElementById(id + 1).innerHTML = "";
        document.getElementById(id + 1).style.backgroundColor = "#38E54D";
      }
    }
  }
  for (let col = 0; col < 3; col++, check++) {
    for (let row = 0; row <= 3; row++) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id + 1] != null) {
        cell[id] = cell[id + 1];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 1).innerHTML = "";
        document.getElementById(id + 1).style.backgroundColor = "#38E54D";
        cell[id + 1] = null;
      } else if (cell[id] == null && cell[id + 2] != null && check <= 1) {
        cell[id] = cell[id + 2];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 2).innerHTML = "";
        document.getElementById(id + 2).style.backgroundColor = "#38E54D";
        cell[id + 2] = null;
      } else if (cell[id] == null && cell[id + 3] != null && check < 1) {
        cell[id] = cell[id + 3];
        document.getElementById(id).innerHTML = cell[id];
        document.getElementById(id).style.backgroundColor = colour[cell[id]];
        document.getElementById(id + 3).innerHTML = "";
        document.getElementById(id + 3).style.backgroundColor = "#38E54D";
        cell[id + 3] = null;
      }
    }
  }
}
function right() {
  let check = 0;
  for (let col = 3; col > 0; col--, check++) {
    for (let row = 3; row >= 0; row--) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id - 1] != null) {
        cell[id] = cell[id - 1];
        document.getElementById(id).innerHTML = cell[id - 1];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 1]];
        document.getElementById(id - 1).innerHTML = "";
        document.getElementById(id - 1).style.backgroundColor = "#38E54D";
        cell[id - 1] = null;
      } else if (cell[id] == null && cell[id - 2] != null && check <= 1) {
        cell[id] = cell[id - 2];
        document.getElementById(id).innerHTML = cell[id - 2];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 2]];
        document.getElementById(id - 2).innerHTML = "";
        document.getElementById(id - 2).style.backgroundColor = "#38E54D";
        cell[id - 2] = null;
      } else if (cell[id] == null && cell[id - 3] != null && check < 1) {
        cell[id] = cell[id - 3];
        document.getElementById(id).innerHTML = cell[id - 3];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 3]];
        document.getElementById(id - 3).innerHTML = "";
        document.getElementById(id - 3).style.backgroundColor = "#38E54D";
        cell[id - 3] = null;
      }
    }
  }

  for (let col = 3; col > 0; col--) {
    for (let row = 3; row >= 0; row--) {
      let id = 4 * row + col;
      if (cell[id] == cell[id - 1] && cell[id] != null) {
        document.getElementById(id).innerHTML = cell[id] + cell[id];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 1] + cell[id]];
        score += cell[id - 1] + cell[id];
        cell[id] += cell[id - 1];
        cell[id - 1] = null;
        document.getElementById(id - 1).innerHTML = "";
        document.getElementById(id - 1).style.backgroundColor = "#38E54D";
      }
    }
  }
  check = 0;
  for (let col = 3; col > 0; col--, check++) {
    for (let row = 3; row >= 0; row--) {
      let id = 4 * row + col;
      if (cell[id] == null && cell[id - 1] != null) {
        cell[id] = cell[id - 1];
        document.getElementById(id).innerHTML = cell[id - 1];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 1]];
        document.getElementById(id - 1).innerHTML = "";
        document.getElementById(id - 1).style.backgroundColor = "#38E54D";
        cell[id - 1] = null;
      } else if (cell[id] == null && cell[id - 2] != null && check <= 1) {
        cell[id] = cell[id - 2];
        document.getElementById(id).innerHTML = cell[id - 2];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 2]];
        document.getElementById(id - 2).innerHTML = "";
        document.getElementById(id - 2).style.backgroundColor = "#38E54D";
        cell[id - 2] = null;
      } else if (cell[id] == null && cell[id - 3] != null && check < 1) {
        cell[id] = cell[id - 3];
        document.getElementById(id).innerHTML = cell[id - 3];
        document.getElementById(id).style.backgroundColor =
          colour[cell[id - 3]];
        document.getElementById(id - 3).innerHTML = "";
        document.getElementById(id - 3).style.backgroundColor = "#38E54D";
        cell[id - 3] = null;
      }
    }
  }
}
function gameover() {
  document.getElementById("inputbox").disabled = true;
  document.getElementById("ubox").disabled = true;
  document.getElementById("dbox").disabled = true;
  document.getElementById("lbox").disabled = true;
  document.getElementById("rbox").disabled = true;
  alert("Game over");
}
function downpossible() {
  if (isfull()) {
    down();
    random_generator();
  } else gameover();
}
function leftpossible() {
  if (isfull()) {
    left();
    random_generator();
  } else gameover();
}
function rightpossible() {
  if (isfull()) {
    right();
    random_generator();
  } else gameover();
}
function uppossible() {
  if (isfull()) {
    up();
    random_generator();
  } else gameover();
}
function isfull() {
  let a = 0;
  for (let z = 0; z < 16; z++) {
    if (cell[z] != null) {
      a++;
    }
  }
  if (a == 16) return false;
  else return true;
}
// Side checker incomplete
