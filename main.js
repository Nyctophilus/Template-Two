let switchers = document.querySelectorAll(".shuffle li");
let imgs = [...document.querySelectorAll(".port")];
let skillSection = document.querySelector(
  ".skills-section"
);
let skillBar = document.querySelectorAll(".skill span");
let stats = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(
  ".stats .count div:nth-child(2)"
);
let started = false;

// filter click search
switchers.forEach((btn) => {
  btn.addEventListener("click", removeActive);
  btn.addEventListener("click", manageImgs);
});

function removeActive() {
  switchers.forEach((b) => {
    b.classList.remove("active");
  });

  //   add active to the current one only
  this.classList.add("active");
}

function manageImgs() {
  imgs.forEach((im) => {
    im.style.display = `none`;
  });

  document
    .querySelectorAll(this.dataset.cat)
    .forEach((sel) => (sel.style.display = `block`));
}

// on scroll
window.addEventListener("scroll", skillBarWidth);
window.addEventListener("scroll", statsCounter);

// skill bar
function skillBarWidth() {
  if (window.scrollY >= skillSection.offsetTop - 300) {
    skillBar.forEach(
      (bar) => (bar.style.width = bar.dataset.progress)
    );
  }
}

// stats numbers
function statsCounter() {
  if (window.scrollY >= stats.offsetTop - 600) {
    if (!started) {
      statsNumbers.forEach((c) => {
        let goal = c.dataset.count;
        let counter = setInterval(() => {
          c.textContent++;

          if (c.textContent == goal) clearInterval(counter);
        }, 1 / goal);
      });
    }
    started = true;
  }
}
