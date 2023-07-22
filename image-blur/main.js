const percentage = document.querySelector('.percentage');

const image = document.querySelector('img');

let percent = 0;

const frame = () => {
  percent ++;
  if (percent > 100) {
    clearInterval(id);
    percentage.style.opacity = '0';
  }
  else {
    percentage.innerHTML = `${percent}%`;
  }
}

const id = setInterval(frame, 25);




