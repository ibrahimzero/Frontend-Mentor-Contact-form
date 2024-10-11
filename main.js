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

if(firstName){
    isValid=true;
    document.querySelector('#firstName + .error-input').style.display='none';
    document.querySelector('#firstName').style.border='1px solid var(--Grey-500-medium)'
    
}else{
    isValid=false;
    document.querySelector('#firstName + .error-input').style.display='block';
    document.querySelector('#firstName').style.border='1px solid var(--Red)'
    
}

})
