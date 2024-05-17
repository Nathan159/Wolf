const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closecross = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('login-form');
    wrapper.classList.remove('register-form');
    
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('login-form');
    wrapper.classList.add('register-form');
    
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
   
});

closecross.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('escape');
   
});

