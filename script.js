let text = document.getElementById("text");
let play = document.getElementById("play");
let replay = document.getElementById("replay");
let bgsound = document.getElementById("bgsound");

let vara = new Vara(
  "#text",
  "./vara/fonts/Pacifico/PacificoSLO.json",
  [
    {
      text: "Ingin ku bahagiakan dirimu",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 6000,
    },
    {
      text: "Setiap saat bersamaku",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 1700,
      duration: 5500,
    },
    {
      text: "Seperti janjiku kepadamu",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 2000,
      duration: 6000,
    },
    {
      text: "Takkan pernah ku ingkari",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 1700,
      duration: 5500,
    },
    {
      text: "Aku kan selalu ada di dekatmu",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 2000,
      duration: 6500,
    },
    {
      text: "Aku kan selalu menemani harimu",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 1500,
      duration: 6500,
    },
    {
      text: "Kau harus tahu betapa aku mencintaimu",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 10000,
    },
    {
      text: "",
      id: "last",
      y: 0,
      fromCurrentPosition: { y: false },
      delay: 5000,
    },
  ],
  {
    fontSize: 18,
    strokeWidth: 2,
    textAlign: "center",
    letterSpacing: 4,
    autoAnimation: false,
  }
);

vara.ready(() => {
  let erase = true;
  text.hidden = true;
  replay.hidden = true;

  play.addEventListener("click", () => {
    play.hidden = true;
    text.hidden = false;
    bgsound.play();
    vara.playAll();
    vara.animationEnd((i, o) => {
      if (i == "last") {
        text.hidden = true;
        replay.hidden = false;
      }
      if (erase) {
        o.container.style.transition = "opacity 1s 1s";
        o.container.style.opacity = 0;
      }
    });
  });
});
