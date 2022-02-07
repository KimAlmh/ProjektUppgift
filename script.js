// function menuToggle() {
// var x = document.getElementById("links");
// if (x.style.display === "flex") {
// hideMenu();
// } else {
// showMenu();
// }
// }
// function showMenu() {
// var y = document.getElementById("topNav");
// var x = document.getElementById("links");

// x.style.display = "flex";
// y.style.backgroundColor = "#111111";
// x.style.border = "1px solid #222222";
// menuHidden = false;
// }
// function hideMenu() {
// var y = document.getElementById("topNav");
// var x = document.getElementById("links");

// x.style.display = "none";
// y.style.backgroundColor = "transparent";
// x.style.border = "hidden";
// menuHidden = true;
// }
// window.onresize = resize;
// let menuHidden = false;

// function resize() {
//   var desktop = window.matchMedia("(min-width: 768px)");
//   var mobile = window.matchMedia("(max-width: 767px)");
//   if (menuHidden && desktop.matches) {
//     showMenu();
//   } else if (menuHidden === false && mobile.matches) {
//     hideMenu();
//   }
// }
let topExpanded = false;
let topShrinked = false;
let BottomExpanded = false;
let bottomShrinked = false;
let mainAnimationFinished = true;

function fadeInTopText(){
  document.getElementById("topText").style.animation = "fadeIn 2s forwards";
  document.getElementById("topName").style.animation = "fadeIn 2s forwards";
  document.getElementById("topLink").style.animation = "fadeIn 2s forwards";
  document.getElementById("topText").style.pointerEvents = "auto";
  document.getElementById("topName").style.pointerEvents = "auto";
  document.getElementById("topLink").style.pointerEvents = "auto";
  document.getElementById("allTopText").style.backgroundColor = "rgba(0,0,0,0.25)";
}
function fadeOutTopText(){
  document.getElementById("topText").style.animation = "fadeOut 2s forwards";
  document.getElementById("topName").style.animation = "fadeOut 2s forwards";
  document.getElementById("topLink").style.animation = "fadeOut 2s forwards";
  document.getElementById("topText").style.pointerEvents = "none";
  document.getElementById("topName").style.pointerEvents = "none";
  document.getElementById("topLink").style.pointerEvents = "none";
  document.getElementById("allTopText").style.backgroundColor = "rgba(0,0,0,0)";
}
function fadeInBottomText(){
  document.getElementById("bottomText").style.animation = "fadeIn 2s forwards";
  document.getElementById("bottomName").style.animation = "fadeIn 2s forwards";
  document.getElementById("bottomLink").style.animation = "fadeIn 2s forwards";
  document.getElementById("bottomText").style.pointerEvents = "auto";
  document.getElementById("bottomName").style.pointerEvents = "auto";
  document.getElementById("bottomLink").style.pointerEvents = "auto";
  document.getElementById("allBottomText").style.backgroundColor = "rgba(0,0,0,0.25)";
}
function fadeOutBottomText(){
  document.getElementById("bottomText").style.animation = "fadeOut 2s forwards";
  document.getElementById("bottomName").style.animation = "fadeOut 2s forwards";
  document.getElementById("bottomLink").style.animation = "fadeOut 2s forwards";
  document.getElementById("bottomText").style.pointerEvents = "none";
  document.getElementById("bottomName").style.pointerEvents = "none";
  document.getElementById("bottomLink").style.pointerEvents = "none";
  document.getElementById("allBottomText").style.backgroundColor = "rgba(0,0,0,0)";
}
function toggleTop() {
  // alert("I am an alert box!");
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  let topText = document.getElementById("topText");
  let bottomText = document.getElementById("bottomText");
  let welcome = document.getElementById("welcome");

  top.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  top.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!topExpanded && !BottomExpanded && mainAnimationFinished) {
    top.style.animation = "topFromNormalToExpand 2s forwards";
    bottom.style.animation = "bottomFromNormalToShrink 2s forwards";

    topExpanded = true;
    fadeInTopText();
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (BottomExpanded && mainAnimationFinished) {
    top.style.animation = "topFromShrinkToExpand 1s forwards";
    bottom.style.animation = "bottomFromExpandToShrink 1s forwards";

    topExpanded = true;
    BottomExpanded = false;

    fadeOutBottomText();
    fadeInTopText();
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    top.style.animation = "topFromExpandToNormal 2s forwards";
    bottom.style.animation = "bottomFromShrinkToNormal 2s forwards";

    topExpanded = false;

    fadeOutBottomText();
    fadeOutTopText();
    welcome.style.animation = "fadeIn 2s forwards";

    top.blur();
  }
}
function test() {
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  let text = document.getElementById("topText");

  text.scrollBy(0,0);
  
}

function toggleBottom() {
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  let topText = document.getElementById("topText");
  let bottomText = document.getElementById("bottomText");
  let welcome = document.getElementById("welcome");

  bottom.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  bottom.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!BottomExpanded && !topExpanded && mainAnimationFinished) {
    bottom.style.animation = "bottomFromNormalToExpand 2s forwards";
    top.style.animation = "topFromNormalToShrink 2s forwards";

    BottomExpanded = true;

    fadeInBottomText();
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (topExpanded && mainAnimationFinished) {
    bottom.style.animation = "bottomFromShrinkToExpand 1s forwards";
    top.style.animation = "topFromExpandToShrink 1s forwards";

    BottomExpanded = true;
    topExpanded = false;

    fadeInBottomText();
    fadeOutTopText();
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    bottom.style.animation = "bottomFromExpandToNormal 2s forwards";
    top.style.animation = "topFromShrinkToNormal 2s forwards";

    BottomExpanded = false;

    fadeOutBottomText();
    fadeOutTopText();
    welcome.style.animation = "fadeIn 2s forwards";

    bottom.blur();
  }
}
