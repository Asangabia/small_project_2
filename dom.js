var myForm = document.querySelector('.form');
var nameInput = document.querySelector('#name-input');
var emailInput = document.querySelector('#email-input');
var msg = document.querySelector('#msg');

myForm.addEventListener('submit' , onsubmit );

function onsubmit(e){
    e.preventDefault();

       if( nameInput.value==='' || emailInput.value==='' )
    {
            msg.innerHTML='Please Enter All fields';
            setTimeout(()=>msg.remove(), 3000)
    }
    else{
        console.log('successful');

    }
}