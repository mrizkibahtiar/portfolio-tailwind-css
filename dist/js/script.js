// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})


// pindahkan posisi toggle sesuai mode 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }


// kirim pesan
const containerContact = document.querySelector('#containerContact');
const nama = containerContact.querySelector('#name');
const email = containerContact.querySelector('#email');
const message = containerContact.querySelector("#message");
const buttonSend = containerContact.querySelector("#buttonSend")
buttonSend.addEventListener('click', function(e){
    let userName;
    let userEmail;
    let userMessage;
    let hasError = false;

    if(nama.value == ""){
        containerContact.querySelector('.alert-name').classList.remove('hidden');
        hasError = true;
    } else {
        containerContact.querySelector('.alert-name').classList.add('hidden');
        userName = nama.value;
    }

    if(email.value == ""){
        containerContact.querySelector('.alert-email').classList.remove('hidden');
        hasError = true;

    } else {
        containerContact.querySelector('.alert-email').classList.add('hidden');
        userEmail = email.value;
    }

    if(message.value == ""){
        containerContact.querySelector('.alert-message').classList.remove('hidden');
        hasError = true;

    } else {
        containerContact.querySelector('.alert-message').classList.add('hidden');
        userMessage = message.value;
    }

    if(!hasError){
        const whatsappURL = `https://api.whatsapp.com/send/?phone=6282264812480&text=nama%20:%20${userName}%0Aemail%20:%20${userEmail}%0Apesan%20:%20${userMessage}`
        window.open(whatsappURL, '_blank');
    } else {
        e.preventDefault();
    }
})
