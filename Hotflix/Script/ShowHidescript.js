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
  searchBtn.addEventListener('click', (event) => {
    if (search.style.top === '-70px' || search.style.top === '') {
      search.style.top = '70px';
      document.querySelector('.header__search-input').focus();
    } else search.style.top = '-70px';
    
  });
  closeBtn.addEventListener('click', (event) => {
    search.style.top = '-70px';
  });


  const youtupe = document.querySelector('.movieTrailer');
  document.addEventListener("click", (event) => {
    if (youtupe){
      if (search.style.top == '70px' || menu.style.right == '0px' || youtupe.style.display == 'block') {
        
        if (event.target.className !== "header__search-input" && event.target.className !== "headerSearchBtn" && event.target.className !== "") {
          search.style.top = '-70px';
        }
        if (event.target.className !== "headerMenuBtn" && event.target.className !== "header__nav" && event.target.className !== "") {
          menu.style.right = '-234px';
        }
        if (event.target.className !== "movieTrailer" && event.target.className !== "")
        {
          youtupe.style.display = '';
        }
      }
      window.onkeyup = function (event) {
        if (event.keyCode == 27) {
          youtupe.style.display = '';
        }
       }
      
    }
    if (search.style.top == '70px' || menu.style.right == '0px') {
        
      if (event.target.className !== "header__search-input" && event.target.className !== "headerSearchBtn" && event.target.className !== "") {
        search.style.top = '-70px';
      }
      if (event.target.className !== "headerMenuBtn" && event.target.className !== "header__nav" && event.target.className !== "") {
        menu.style.right = '-234px';
      }
    }
  });


  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!mutation.addedNodes) return
      console.log(mutation.addedNodes.length);
      for (let i = 0; i < mutation.addedNodes.length; i++) {

        if (document.querySelector('.videoPlay')) {
          const playTrailer = document.querySelector('.videoPlay');
          playTrailer.addEventListener('click', (event) => {
            document.querySelector('.movieTrailer').style.display = "block";
            
          });
        }
        if (document.querySelector('.next') && document.querySelector('.prev')) {
          document.querySelector('.next').addEventListener('click', event => {
            $('.col').slick('slickNext');
          });
          document.querySelector('.prev').addEventListener('click', event => {
              $('.col').slick('slickPrev');
          });
        }
        
        let node = mutation.addedNodes[i]
      }
    })
  })
  
  observer.observe(document.body, {
      childList: true
    , subtree: true
    , attributes: false
    , characterData: false
  })

  
});