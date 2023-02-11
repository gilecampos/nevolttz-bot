
// BTN MENU MOBILE
const btnMobile = document.querySelector("[data-js=btnMobile]");

function toggleMenu(event) {
   if(event.type === 'touchstart') event.preventDefault();

   const nav = document.querySelector("nav");
   nav.classList.toggle('active')

   const active = nav.classList.contains('active')
   event.currentTarget.setAttribute('aria-expanded', active);

   if(active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
   } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
   }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// ACCORDION 
const acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
