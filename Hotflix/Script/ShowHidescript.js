window.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.headerMenuBtn');
    const menu = document.querySelector('.header__nav');
    button.addEventListener('click', (event) => {
      if (menu.style.display == '') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = '';
      }
    });
  
    const searchBtn = document.querySelector('.headerSearchBtn');
    const closeBtn = document.querySelector('.closeSearch');
    const search = document.querySelector('.header__search');
    searchBtn.addEventListener('click', (event) => {
      search.style.display = 'flex';
    });
    closeBtn.addEventListener('click', (event) => {
      search.style.display = '';
    });
  });
  