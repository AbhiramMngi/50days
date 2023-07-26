const joke = document.querySelector('.joke');
const nextJoke = document.querySelector('.next-joke');

const fetchJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', 
  {
    headers: {
      Accept: 'application/json'
    }
  });

  const data = await response.json();
  
  joke.innerText = data['joke'];
}

nextJoke.addEventListener('click', fetchJoke);


fetchJoke();