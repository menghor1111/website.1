const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const ortBtn = document.querySelector(".ort-btn");
const tosBtn = document.querySelector(".tos-btn");

tosBtn.addEventListener("click", () => {
  question.innerHTML = " ok .tos chol muy";
});

ortBtn.addEventListener("mouseover", () => {
  const ortBtnRect = ortBtn.getBoundingClientRect();
  const maxX = window.innerWidth - ortBtnRect.width;
  const maxY = window.innerHeight - ortBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  ortBtn.style.left = randomX + "px";
  ortBtn.style.top = randomY + "px";
});
