const days = 4;
const daysMiliseconds = 1000 * 60 * 60 * 24 * 4;
const countToDate = new Date().getTime() + daysMiliseconds;
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 1000);

function flipAllCards(time) {
  const days = Math.floor(time / 86400);
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;
  console.log(time, days, hours, minutes, seconds);

  if (days === 4) {
    flip(document.querySelector("[data-days]"), 0);
  } else {
    flip(document.querySelector("[data-days]"), days);
  }
  flip(document.querySelector("[data-hours]"), hours);
  flip(document.querySelector("[data-minutes]"), minutes);
  flip(document.querySelector("[data-seconds]"), seconds);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".card__top");
  const startNumber =
    parseInt(topHalf.textContent) < 10 ? `0${parseInt(topHalf.textContent)}` : parseInt(topHalf.textContent);
  newNumber = newNumber < 10 && newNumber >= 0 ? `0${newNumber}` : newNumber;

  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".card__bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}
