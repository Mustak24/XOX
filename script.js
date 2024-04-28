
const hading = document.getElementById("hading");
const spanf = document.getElementsByClassName("b");
const box = document.getElementsByClassName("box");
var round = 1;

const play = (x) => {

  if (spanf[x - 1].textContent == "") {

    if (round % 2 == 1) {
      spanf[x - 1].textContent = "X";
      spanf[x - 1].style.color = "black";
    }
    else {
      spanf[x - 1].textContent = "O";
      spanf[x - 1].style.color = "white";
    }

    round++;

    if (
      ((spanf[0].textContent == spanf[1].textContent && spanf[1].textContent == spanf[2].textContent) ||
        (spanf[0].textContent == spanf[3].textContent && spanf[3].textContent == spanf[6].textContent) ||
        (spanf[0].textContent == spanf[4].textContent && spanf[4].textContent == spanf[8].textContent)) && spanf[0].textContent != ""
    ) {
      hading.textContent = `${spanf[0].textContent} PLAYER IS WIN`;
      Restart("", spanf[0].textContent);
    }

    else if (
      ((spanf[3].textContent == spanf[4].textContent && spanf[4].textContent == spanf[5].textContent) ||
        (spanf[1].textContent == spanf[4].textContent && spanf[4].textContent == spanf[7].textContent) ||
        (spanf[2].textContent == spanf[4].textContent && spanf[4].textContent == spanf[6].textContent)) && spanf[4].textContent != ""
    ) {
      hading.textContent = `${spanf[4].textContent} PLAYER IS WIN`;
      Restart("", spanf[4].textContent);
    }

    else if (
      ((spanf[2].textContent == spanf[5].textContent && spanf[5].textContent == spanf[8].textContent) ||
        (spanf[6].textContent == spanf[7].textContent && spanf[7].textContent == spanf[8].textContent)) && spanf[8].textContent != ""
    ) {
      hading.textContent = `${spanf[8].textContent} PLAYER IS WIN`;
      Restart("", spanf[8].textContent);
    }

    else {
      var draw;
      for (draw = 0; draw < 9; draw++) {
        if (spanf[draw].textContent == "") break;
      }
      if (draw > 8) {
        alert("GAME DRAW");
        Restart("R");
      }
    }
  }
  else alert("Wrong place");
}

var temp = 1;
const Restart = (Y, W) => {
  for (let i = 0; i < 9; i++) {
    box[i].style.transform = `rotateY(${temp * 180}deg)`;
    if (Y == "R") {
      spanf[i].textContent = ""
      hading.textContent = "WELCOME"
    }
    else spanf[i].textContent = `${W}`;
  }
  temp++;
  round = 1;
}
