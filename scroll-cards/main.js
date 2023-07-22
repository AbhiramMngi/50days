const cardContainer = document.querySelector('.card-container');
// const listener = document.querySelector('.container');
let children;
const renderCards = () => {
  let cards = "";
  for(let i = 0; i < 100; i++) {
    cards += getCard(i);
  }
  cardContainer.innerHTML = cards;
  children = [];

  for (let node of cardContainer.childNodes) {
    if (node.nodeType === 1) children.push(node);
  }

  console.log(children);
}


const getCard = (i) => {
  const className = i % 2 == 0? 'even': 'odd';
  return  `
    <div class=" ${className} card" id="${i}">
      <p class="card-content">Content</p>
    </div>
  `
  // console.log(temp.content.childNodes);
  // return temp.content.childNo/des[1]; 
}

renderCards()



const scrollExec = () => {
  const y = Math.max(window.scrollY - 108, 0) + 600;
  const h = 200;
  for (let i = 0; i < children.length; i++) {
    const className = i % 2 == 0? 'even': 'odd';
    if (y >= (h * i)) children[i].classList.remove(className);
    else children[i].classList.add(className);
  }
  // console.log(y % )
}

window.onscroll = scrollExec

scrollExec()