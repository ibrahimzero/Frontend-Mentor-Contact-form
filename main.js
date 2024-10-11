const form =document.getElementById('form');
const successMsg=document.getElementById('send-msg');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const firstName= document.querySelector('#firstName').value.trim();
    const lastName= document.querySelector('#lastName').value.trim();
    const email= document.querySelector('#email').value;
    const query= document.querySelector('input[name="query-type"]:checked');
    const message= document.querySelector('#message').value;
 const consent=document.getElementById('consent').checked;
 const erorText=document.querySelectorAll('.error-input');
 const unvalid= document.querySelector('.un-valid')

let isValid =true;
if(firstName){
    isValid=true;
    document.querySelector('#firstName + .error-input').style.display='none';
    document.querySelector('#firstName').style.border='1px solid var(--Grey-500-medium)'
    
}else{
    isValid=false;
    document.querySelector('#firstName + .error-input').style.display='block';
    document.querySelector('#firstName').style.border='1px solid var(--Red)'
    
}

if(lastName){
    isValid=true;
    document.querySelector('#lastName + .error-input').style.display='none';
    document.querySelector('#lastName').style.border='1px solid var(--Grey-500-medium)'
    
}else{
    isValid=false;
    document.querySelector('#lastName + .error-input').style.display='block';
    document.querySelector('#lastName').style.border='1px solid var(--Red)'
    
}
if(email){
    isValid=true;
    document.querySelector('#email + .error-input').style.display='none';
    document.querySelector('#email').style.border='1px solid var(--Grey-500-medium)'
    
}else{
    isValid=false;
    document.querySelector('#email + .error-input').style.display='block';
    document.querySelector('#email').style.border='1px solid var(--Red)'
    
}
if(validateEmail(email)){
    isValid=true
    document.querySelector('#email + .error-input').style.display='none';
    document.querySelector('#email').style.border='1px solid var(--Grey-500-medium)'
}else{
isValid=false;
document.getElementById('un-valid').style.display='block';
document.querySelector('#email').style.border='1px solid var(--Red)'
    
}
if(message){
    isValid=true;
    document.querySelector('#message + .error-input').style.display='none';
    document.querySelector('#message').style.border='1px solid var(--Grey-500-medium)'
    
}else{
    isValid=false;
    document.querySelector('#message + .error-input').style.display='block';
    document.querySelector('#message').style.border='1px solid var(--Red)'
    
}
if(query){
    isValid=true;
    document.querySelector('.radio-flex + .error-input').style.display='none';
    
}else{
    isValid=false;
    document.querySelector('.radio-flex + .error-input').style.display='block';
    

}

if(consent){
    isValid=true;
    document.querySelector('#error-input').style.display='none';
    
}else{
    isValid=false;
    document.querySelector('#error-input').style.display='block';
    
}
if(isValid){
    successMsg.classList.add('active');
    form.reset()
}


})
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }