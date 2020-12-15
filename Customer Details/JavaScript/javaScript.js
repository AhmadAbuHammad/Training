window.addEventListener('DOMContentLoaded', (event) => {
    function showOther(event) {
        document.querySelector('.hide').style.display = value == 1 ? 'block' : 'none';
    }
    function getInfo() {
        // code here
        personData = {
            firstName: document.querySelector('[name = "Fname"]').value,
            lastName: document.querySelector('[name = "Lname"]').value,
            address : {
                street: document.querySelector('[name = "streetAddress"]').value,
                street2: document.querySelector('[name = "street2"]').value,
                city: document.querySelector('[name = "city"]').value,
                state: document.querySelector('[name = "state"]').value,
                zipcode: document.querySelector('[name = "zipcode"]').value,            
            }
        
        }
    }
    function checkRequired() {
        let req =Array.from(document.querySelectorAll('.req'));
        req.forEach(element => {
            console.log(element);
        });

        if(personData.firstName =='')
        {
            // console.log(document.querySelector('[name = "Fname"]').parentNode.parentNode.parentNode);
            document.querySelector('[name = "Fname"]').parentNode.parentNode.parentNode.style.background = 'rgb(255, 237, 237)';
            document.querySelector('[name = "Fname"]').style.border = '2px solid #ffb1b1';
            let iDiv = document.createElement('div');
            iDiv.id = 'block';
            iDiv.className = 'block1';
            iDiv.innerHTML = "! this feild is required"
            document.querySelector('[name = "Fname"]').parentNode.parentNode.parentNode.appendChild(iDiv);
            
        }
        if(personData.lastName =='')
        {
            // console.log(document.querySelector('[name = "Lname"]').parentNode.parentNode.parentNode);
            document.querySelector('[name = "Lname"]').parentNode.parentNode.parentNode.style.background = 'rgb(255, 237, 237)';
            document.querySelector('[name = "Lname"]').style.border = '2px solid #ffb1b1';
            let iDiv = document.createElement('div');
            iDiv.id = 'block';
            iDiv.className = 'block1';
            iDiv.innerHTML = "! this feild is required"
            document.querySelector('[name = "Lname"]').parentNode.parentNode.parentNode.appendChild(iDiv);
        }
        return false;
    }
    
    function onSubmit(event) {
        event.preventDefault();
        getInfo()
        if(!checkRequired());
        return false;
        // Show success modal
        document.querySelector('.successful').style.display = "block";
    }

    const showother = document.querySelector('.selectOther');
    showother.addEventListener("onchange", function() {
        document.querySelector('.hide').style.display = value == 1 ? 'block' : 'none';
    });
    const personForm = document.querySelector('.person-form');
    personForm.addEventListener('submit', onSubmit);
    
    let fname = document.querySelector('[name="Fname"]');
    
    fname.addEventListener('keypress', function ( event ) {  
       let key = event.keyCode;
        if (key === 32) {
          event.preventDefault();
        }
    });
    let lname = document.querySelector('[name="Lname"]');
    
    lname.addEventListener('keypress', function ( event ) {  
       let key = event.keyCode;
        if (key === 32) {
          event.preventDefault();
        }
    });

    let personData = {}

    
    /**
     * Handle submit form
     * @param {*} event submit event
     */

    // Hide success modal
    document.querySelector('.successful').addEventListener('click', (event) => {
        if (event.target.className === 'successful') {
            document.querySelector('.successful').style.display = "none";
        }
    });
});

