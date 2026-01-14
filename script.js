// Ce script est facultatif, il est utilisé pour charger la photo de couverture en fonction de la taille de l'écran.
window.addEventListener('scroll', function() {
    var coverPhoto = document.querySelector('.cover-photo');
    var navbar = document.querySelector('.navbar');
    var navLinks = navbar.querySelectorAll('a');
    //var navIcon = navbar.querySelectorAll('navbar-toggler-icon');

    // Récupérer la hauteur de la photo de couverture
    var coverPhotoHeight = coverPhoto.getBoundingClientRect().height;
    var navbarHeight = navbar.getBoundingClientRect().height;

    // Vérifier si l'utilisateur a fait défiler jusqu'au bas de la photo de couverture
    if (window.scrollY >= coverPhotoHeight - navbarHeight) {
        setTimeout(function() {
            navbar.style.backgroundColor = 'rgba(244, 244, 244, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.classList.add('scrolled');
            navLinks.forEach(function(link) {
                link.style.color = '#373737';
            });
        }, 40);
    }
    else {
        setTimeout(function() {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            navbar.style.backdropFilter = 'blur(0px)';
            navbar.classList.remove('scrolled');
            navLinks.forEach(function(link) {
                link.style.color = '#FFF';
            });
        }, 40);
        
    }
});

const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });


const openActivitiesBtn = document.getElementById("open-activities-pdf");
const openKitesurfBtn = document.getElementById("open-kitesurf-pdf");
const modal = document.getElementById("canvaPdfModal");
const iframe = modal.querySelector("iframe");
const closeBtn = modal.querySelector(".pdf-close");

openActivitiesBtn.addEventListener("click", function () {
  iframe.src = "https://www.canva.com/design/DAG892z7uxM/view?embed";
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  iframe.src = "";
  document.body.style.overflow = "";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
    document.body.style.overflow = "";
  }
});

openKitesurfBtn.addEventListener("click", function () {
  iframe.src = "https://www.canva.com/design/DAG-ZYQvK8w/view?embed";
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});