document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

const form=document.getElementById("contactForm");

const error=document.getElementById("error");

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

if(name=="" || email=="" || message==""){

error.textContent="Please fill all fields.";

return;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

error.textContent="Enter a valid email.";

return;

}

error.style.color="green";

error.textContent="Message Sent Successfully!";

form.reset();

});
