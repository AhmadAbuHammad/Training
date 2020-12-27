window.addEventListener('DOMContentLoaded', (event) => {
    //show menu
    const button = document.querySelector('.headerMenuBtn');
    const menu = document.querySelector('.header__nav');
    button.addEventListener('click', (event) => {
      if (menu.style.right == '-234px' || menu.style.right == '') {
        menu.style.right = '0px';
      } else {
        menu.style.right = '-234px';
      }
    });

    ///Show search
    const searchBtn = document.querySelector('.headerSearchBtn');
    const closeBtn = document.querySelector('.closeSearch');
    const search = document.querySelector('.header__search');
    console.log(search.style.top);
    searchBtn.addEventListener('click', (event) => {
      // console.log("hhhhh")
      if (search.style.top === '-70px' || search.style.top === '') {
        search.style.top = '70px';
        document.querySelector('.header__search-input').focus();
      } else search.style.top = '-70px';
      
    });
    closeBtn.addEventListener('click', (event) => {
      search.style.top = '-70px';
    });

    document.addEventListener("click", (event) => {
      if (search.style.top == '70px' || menu.style.right == '0px') {
        
        if (event.target.className !== "header__search-input" && event.target.className !== "headerSearchBtn" && event.target.className !== "") {
          search.style.top = '-70px';
        }
        if (event.target.className !== "headerMenuBtn" && event.target.className !== "header__nav" && event.target.className !== "") {
          menu.style.right = '-234px';
        }
      }
    });
  });