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
  128: "",
  256: "",
  512: "",
  1024: "",
  2048: "",
  4096: "",
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
  document.getElementById("header").innerHTML = "Score:" + score;
}
function move(event) {
  let key = event.key;

  if (key == "ArrowDown") {
    down();
    random_generator();
  } else if (key == "ArrowUp") {
    up();
    random_generator();
  } else if (key == "ArrowLeft") {
    left();
    random_generator();
  } else if (key == "ArrowRight") {
    right();
    random_generator();
  }
  turn_counter++;
}
function down() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let id = 4 * row + col;
      if (cell[id] != null && cell[id + 4] == null) {
        cell[id + 4] = cell[id];
        document.getElementById(id + 4).innerHTML = cell[id + 4];
        document.getElementById(id + 4).style.backgroundColor =
          colour[cell[id + 4]];
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
        cell[id] = null;
      }
      if (cell[id] == cell[id + 4] && cell[id] != null) {
        document.getElementById(id + 4).innerHTML = cell[id + 4] + cell[id];
        document.getElementById(id + 4).style.backgroundColor =
          colour[cell[id + 4] + cell[id]];
        score += cell[id + 4] + cell[id];
        cell[id + 4] = cell[id + 4] + cell[id];
        cell[id] = null;
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
      }
    }
  }
  document.getElementById("header").innerHTML = "Score:" + score;
}
function up() {
  for (let row = 3; row > 0; row--) {
    for (let col = 3; col >= 0; col--) {
      let id = 4 * row + col;
      if (cell[id] != null && cell[id - 4] == null) {
        cell[id - 4] = cell[id];
        document.getElementById(id - 4).innerHTML = cell[id - 4];
        document.getElementById(id - 4).style.backgroundColor =
          colour[cell[id - 4]];
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
        cell[id] = null;
      }
      if (cell[id] == cell[id - 4] && cell[id] != null) {
        document.getElementById(id - 4).innerHTML = cell[id - 4] + cell[id];
        document.getElementById(id - 4).style.backgroundColor =
          colour[cell[id - 4] + cell[id]];
        score += cell[id - 4] + cell[id];
        cell[id - 4] = cell[id - 4] + cell[id];
        cell[id] = null;
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
      }
    }
  }
  document.getElementById("header").innerHTML = "Score:" + score;
}
function left() {
  for (let col = 3; col > 0; col--) {
    for (let row = 3; row >= 0; row--) {
      let id = 4 * row + col;
      if (cell[id] != null && cell[id - 1] == null) {
        cell[id - 1] = cell[id];
        document.getElementById(id - 1).innerHTML = cell[id - 1];
        document.getElementById(id - 1).style.backgroundColor =
          colour[cell[id - 1]];
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
        cell[id] = null;
      }
      if (cell[id] == cell[id - 1] && cell[id] != null) {
        document.getElementById(id - 1).innerHTML = cell[id - 1] + cell[id];
        document.getElementById(id - 1).style.backgroundColor =
          colour[cell[id - 1] + cell[id]];
        score += cell[id - 1] + cell[id];
        cell[id - 1] = cell[id - 1] + cell[id];
        cell[id] = null;
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
      }
    }
  }
  document.getElementById("header").innerHTML = "Score:" + score;
}
function right() {
  for (let col = 0; col < 3; col++) {
    for (let row = 0; row <= 3; row++) {
      let id = 4 * row + col;
      if (cell[id] != null && cell[id + 1] == null) {
        cell[id + 1] = cell[id];
        document.getElementById(id + 1).innerHTML = cell[id + 1];
        document.getElementById(id + 1).style.backgroundColor =
          colour[cell[id + 1]];
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
        cell[id] = null;
      }
      if (cell[id] == cell[id + 1] && cell[id] != null) {
        document.getElementById(id + 1).innerHTML = cell[id + 1] + cell[id];
        document.getElementById(id + 1).style.backgroundColor =
          colour[cell[id + 1] + cell[id]];
        score += cell[id + 1] + cell[id];
        cell[id + 1] = cell[id + 1] + cell[id];
        cell[id] = null;
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).style.backgroundColor = "green";
      }
    }
  }
  document.getElementById("header").innerHTML = "Score:" + score;
}
