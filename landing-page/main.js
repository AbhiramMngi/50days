const container = document.querySelector('.container');
const ps5 = document.querySelector('.ps5-container');
const xbox = document.querySelector('.xbox-container');
ps5.addEventListener('mouseenter', () => {
  console.log(container.classList);
  container.classList.add('hover-right');
});

ps5.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

xbox.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

xbox.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});