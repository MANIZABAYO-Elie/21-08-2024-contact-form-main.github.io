const contactFm= document.getElementById('contact-fm');
const errorMessage = document.getElementById('error');
const successmessage = document.getElementById('success');
contactFm.addEventListener('submit',(e)=>{
    e.preventDefault()
const firstName = document.getElementById('first-name').value.trim();
const lastName = document.getElementById('last-name').value.trim();
const email  = document.getElementById('email').value.trim();
const queryType = document.querySelector('input[name="query-type"]:checked');
const message = documet.getElementById('message').value.trim();
const contest = document.getElementById('contest').checked;
const formAlert = document.querySelectorAll('.form-alert');
// first name validation
let isValid = true;
if (firstName===""){
    isValid = false;

    document.querySelector('#first-name + .form-alert').style.display = "block";
    document.querySelector('#first-name').style.border = " 1px solid red";
}else{
    document.querySelector('#first-name + .form-alert').style.display = "none";
    document.querySelector('#first-name').style.border = " 1px solid gray";
}
// last name validation


if (lastNametName===""){
    isValid = false;

    document.querySelector('#last-name + .form-alert').style.display = "block";
    document.querySelector('#last-name').style.border = " 1px solid red";
}else{
    document.querySelector('#last-name + .form-alert').style.display = "none";
    document.querySelector('#last-name').style.border = " 1px solid gray";

}

// Email validation
if(!isValidEmail(email)){
 isValid = false
 document.querySelector('#email + .form-alert').style.display = "block";
 document.querySelector('#email').style.border = " 1px solid red";
}else{
    document.querySelector('#email + .form-alert').style.display = "none";
    document.querySelector('#email').style.border = " 1px solid gray";

}
// query-type validation
if(!queryType){
    isValid=false
    document.querySelector('.radio-inputs + .form-alert').style.display = "block";
    
    
   }else{
       document.querySelector('.radio-inputs + .form-alert').style.display = "none";
       
   
   }
 // Message Validation
 if(message===""){
    isValid=false
    document.querySelector('#message + .form-alert').style.display = "block";
    document.querySelector('#email').style.border = " 1px solid red";
    
   }else{
       document.querySelector('#message + .form-alert').style.display = "none";
       document.querySelector('#email').style.border = " 1px solid gray";
       
   
   }
   // contest validation
   if(!contest){
    isValid= false
    formAlert[5].classList.add('form-error');
    } else{
        formAlert[5].classList.remove('form-error')
    }
    // form is valid
    if(isValid){
        successmessage.classList.add('active')
        formAlert.rest()
    }

})
// email validation function
function isValidEmail(){
    const emailRegex = '/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/';
    return emailRegex.test(email);
}
