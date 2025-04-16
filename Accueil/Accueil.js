// Slide of rooms
let current = 0;
const slides = document.querySelectorAll('.chambre');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

window.onload = function () {
  const links = [
    { buttonId: 'Apropos', sectionId: 'apropos' },
    { buttonId: 'Chambres', sectionId: 'chambres' },
    { buttonId: 'Restaurant', sectionId: 'restaurant' },
    { buttonId: 'Services', sectionId: 'services' },
    { buttonId: 'Réservation', sectionId: 'réservation' }
  ];

  links.forEach(link => {
    const button = document.getElementById(link.buttonId);
    const section = document.getElementById(link.sectionId);

    if (button && section) {
      button.onclick = () => {
        section.scrollIntoView({ behavior: 'smooth' });
      };
    }
  });

  const btn1 = document.querySelector('.Button1');
  const fin_btn1 = document.getElementById('réservation');


    btn1.onclick = function () {
      fin_btn1.scrollIntoView({
        behavior: 'smooth'
      });
    };
  

  const menuItem = document.querySelector('.Button3');
  const targetSection = document.getElementById('réservation');

  if (menuItem && targetSection) {
    menuItem.onclick = function () {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    };
  }
};





