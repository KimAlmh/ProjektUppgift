let topExpanded = false;
let rightExpanded = false;
let bottomExpanded = false;
let leftExpanded = false;
let mainAnimationFinished = true;

function fadeInText(parent) {
  const children = Array.from(parent.children);

  children.forEach((element) => {
    element.style.animation = "fadeIn 2s forwards";
    element.style.pointerEvents = "auto";
    element.style.backgroundColor = "rgba(0,0,0,0.65)";
  });
}
function fadeOutText(parent) {
  const children = Array.from(parent.children);

  children.forEach((element) => {
    element.style.animation = "fadeOut 2s forwards";
    element.style.pointerEvents = "none";
    element.style.backgroundColor = "rgba(0,0,0,0)";
  });
}

function toggleTop() {
  let top = document.getElementById("top");
  let welcome = document.getElementById("welcome");

  top.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  top.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!topExpanded && mainAnimationFinished) {
    top.style.zIndex = "2";
    top.style.animation = "topExpand 2s forwards";
    topExpanded = true;
    fadeInText(document.getElementById("allTopText"));
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    topExpanded = false;

    top.style.animation = "topShrink 1s forwards";
    fadeOutText(document.getElementById("allTopText"));
    welcome.style.animation = "fadeIn 2s forwards";

    setTimeout(function () {
      top.style.zIndex = "1";
      top.blur();
    }, 1000);
  }
}

function toggleBottom() {
  let bottom = document.getElementById("bottom");
  let welcome = document.getElementById("welcome");

  bottom.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  bottom.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!bottomExpanded && mainAnimationFinished) {
    bottom.style.zIndex = "2";
    bottom.style.animation = "bottomExpand 2s forwards";
    bottomExpanded = true;
    fadeInText(document.getElementById("allBottomText"));
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    bottomExpanded = false;
    bottom.style.animation = "bottomShrink 1s forwards";
    fadeOutText(document.getElementById("allBottomText"));
    welcome.style.animation = "fadeIn 2s forwards";

    setTimeout(function () {
      bottom.style.zIndex = "1";
      bottom.blur();
    }, 1000);
  }
}

function toggleLeft() {
  let left = document.getElementById("left");
  let welcome = document.getElementById("welcome");

  left.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  left.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!leftExpanded && mainAnimationFinished) {
    left.style.zIndex = "2";
    left.style.animation = "leftExpand 2s forwards";
    leftExpanded = true;
    fadeInText(document.getElementById("allLeftText"));
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    leftExpanded = false;
    left.style.animation = "leftShrink 1s forwards";
    fadeOutText(document.getElementById("allLeftText"));
    welcome.style.animation = "fadeIn 2s forwards";

    setTimeout(function () {
      left.style.zIndex = "1";
      left.blur();
    }, 1000);
  }
}

function toggleRight() {
  let right = document.getElementById("right");
  let welcome = document.getElementById("welcome");

  right.addEventListener("animationstart", (ev) => {
    mainAnimationFinished = false;
  });
  right.addEventListener("animationend", (ev) => {
    mainAnimationFinished = true;
  });

  if (!rightExpanded && mainAnimationFinished) {
    right.style.zIndex = "2";
    right.style.animation = "rightExpand 2s forwards";
    rightExpanded = true;
    fadeInText(document.getElementById("allRightText"));
    welcome.style.animation = "fadeOut 1s forwards";
  } else if (mainAnimationFinished) {
    rightExpanded = false;
    right.style.animation = "rightShrink 1s forwards";
    fadeOutText(document.getElementById("allRightText"));
    welcome.style.animation = "fadeIn 2s forwards";

    setTimeout(function () {
      right.style.zIndex = "1";
      right.blur();
    }, 1000);
  }
}

function test() {
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  let text = document.getElementById("topText");

  text.scrollBy(0, 0);
}
