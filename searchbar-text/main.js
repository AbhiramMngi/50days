const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click',() => {
  console.log('Search BAr', searchBar);
  if (searchBar.classList.contains('clicked')) {
    searchBar.classList.remove('clicked');
    searchBar.style.width = '0';
    searchBar.style.paddingLeft = '0';
  }
  else {
    searchBar.classList.add('clicked');
    searchBar.style.width = '15rem';
    searchBar.style.paddingLeft = '1rem';
  }
});
