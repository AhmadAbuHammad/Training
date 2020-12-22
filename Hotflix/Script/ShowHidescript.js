window.addEventListener('DOMContentLoaded', (event) => {
    
    //show menu
    const button = document.querySelector('.headerMenuBtn');
    const menu = document.querySelector('.header__nav');
    button.addEventListener('click', (event) => {
      if (menu.style.display == '') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = '';
      }
    });

    ///Show search
    const searchBtn = document.querySelector('.headerSearchBtn');
    const closeBtn = document.querySelector('.closeSearch');
    const search = document.querySelector('.header__search');
    searchBtn.addEventListener('click', (event) => {
      if (search.style.display == '') {
        search.style.display = 'flex';
      } else {
        search.style.display = '';
      }
    });
    closeBtn.addEventListener('click', (event) => {
      search.style.display = '';
    });

    //show play button
    
    // button.addEventListener('click', (event) => {
    //   if (menu.style.display == '') {
    //     menu.style.display = 'flex';
    //   } else {
    //     menu.style.display = '';
    //   }
    // });
  });