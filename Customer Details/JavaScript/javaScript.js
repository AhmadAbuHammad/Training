window.addEventListener('DOMContentLoaded', (event) => {
  // add or hide other section
  const selectElement = document.querySelector('.selectOther');
  selectElement.addEventListener('change', (event) => {
    document.querySelector('.hide').style.display = event.target.value === '1' ? 'block' : 'none';
  });

  
  /**
     * //check valid email
     * @param {*} 
  */
  function checkEmail()
  {
      let x = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/");
      if (document.querySelector('[name = "email"]').value != ''){
          if (!document.querySelector('[name = "email"]').value.match(x))  {
              document.querySelector('[name = "email"]').parentNode.parentNode.classList.add("errForm-section");
              document.querySelector('[name = "email"]').classList.add("errfield");
              if(!document.querySelector('#invalid')){
                  let iDiv = document.createElement('invalid');
                  iDiv.id = 'invalid';
                  iDiv.className = 'block1';
                  iDiv.innerHTML = "! enter a valid email address";
                  document.querySelector('[name = "email"]').parentNode.parentNode.appendChild(iDiv);  
              }
          
          }

      }
      else
      return true;
  }

  // git customers details
  function getInfo() {
      personData = {
      firstName: document.querySelector('[name = "Fname"]').value,
      lastName: document.querySelector('[name = "Lname"]').value,
      address: {
        street: document.querySelector('[name = "streetAddress"]').value,
        street2: document.querySelector('[name = "street2"]').value,
        city: document.querySelector('[name = "city"]').value,
        state: document.querySelector('[name = "state"]').value,
        zipcode: document.querySelector('[name = "zipcode"]').value,
      },
    };
    console.log(personData);
  }
  // to check the required fields
  function checkRequired() {
    const req = Array.from(document.querySelectorAll('.req'));
    let returnValue = 0;
    req.forEach(c => {
        const reqField = Array.from(c.querySelectorAll('.reqfield'));
        let insert = 0;
        reqField.forEach(element => {
           if (element.value == '') {
               element.classList.add("errfield");
               //c.style.background ='rgb(255, 237, 237)';
               
               insert = 1;
               returnValue =1;
           }
          });
          if(insert)
          {
             c.classList.add("errForm-section");
             if(!c.querySelector('.block1')){
                 let iDiv = document.createElement('div');
                 iDiv.id = 'block';
                 iDiv.className = 'block1';
                 iDiv.innerHTML = "! this feild is required";
                 c.appendChild(iDiv);  
             }
          }
    });
    if(!checkEmail())
    returnValue = 1; 
    
    if(returnValue)
    {
      return false;
    }
    return true;
  }

  /**
     * Handle submit form
     * @param {*} event submit event
     */
  function onSubmit(event) {
    event.preventDefault();
    getInfo();
    if (!checkRequired())
    return false;
    // Show success modal
    document.querySelector('.successful').style.display = 'block';
  }
  // check submit
  const personForm = document.querySelector('.person-form');
  personForm.addEventListener('submit', onSubmit);

  // prevent spaces in first name field
  const fname = document.querySelector('[name="Fname"]');
  fname.addEventListener('keypress', (event) => {
    const key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
  });

  // prevent spaces in last name field
  const lname = document.querySelector('[name="Lname"]');
  lname.addEventListener('keypress', (event) => {
    const key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
  });

  let personData = {};

  //remove error sections
  const removeErrSec = document.querySelectorAll(".req");
  removeErrSec.forEach(element => {
      const removeErrInput =element.querySelectorAll(".reqfield")
      removeErrInput.forEach(element1 => {
          element1.addEventListener('click', () => {
              element1.classList.remove("errfield");
          });
      });
      element.addEventListener('focus', () => {
          if(element.querySelector(".errForm-section") != null)
          element.removeChild(element.lastChild);
          element.classList.remove("errForm-section")  
      });
      element.addEventListener('click', () => {
          if(element.querySelector(".block1") != null)
          element.removeChild(element.lastChild);
          element.classList.remove("errForm-section")
      });
   });

   //remove invaledity
   const removeinvalid = document.querySelector('[name = "email"]');
   const removeInvalidPrnt = removeinvalid.parentNode.parentNode;
   removeInvalidPrnt.addEventListener('click', () => {
      if(removeInvalidPrnt.querySelector(".errForm-section") != null) {
          removeInvalidPrnt.removeChild(element.lastChild);
          removeInvalidPrnt.classList.remove("errForm-section")
          removeinvalid.classList.remove("errfield");
      }
  });

  // Hide success modal
  document.querySelector('.successful').addEventListener('click', (event) => {
    if (event.target.className === 'successful') {
      location.reload();
      document.querySelector('.successful').style.display = 'none';
    }
  });
});

// sd,,sl