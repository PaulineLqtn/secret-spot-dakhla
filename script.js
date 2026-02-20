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
                link.style.color = '#7A746A';
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


const kitesurfModal = document.getElementById("kitesurfModal");
const content = document.getElementById("kitesurf-content");

document.getElementById("openKitesurfBtn").addEventListener("click", async () => {
  kitesurfModal.style.display = "flex";

  try {
    const response = await fetch("./content/kitesurf.md");
    const markdown = await response.text();
    content.innerHTML = marked.parse(markdown);
  } catch (error) {
    content.innerHTML = "Impossible de charger les tarifs.";
  }
});

document.getElementById("closeKitesurfBtn").addEventListener("click", () => {
  kitesurfModal.style.display = "none";
});


const openBtn = document.getElementById("openActivitiesBtn");
const activitiesModal = document.getElementById("activitiesModal");
const closeActivitiesBtn = document.getElementById("closeActivities");
const container = document.getElementById("pdfContainer");

let pdfLoaded = false;

openBtn.addEventListener("click", async () => {
  activitiesModal.style.display = "flex";

  if (pdfLoaded) return;
  pdfLoaded = true;

  const pdf = await pdfjsLib.getDocument("./content/Surf à L’Océan.pdf").promise;

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    container.appendChild(canvas);
  }
});

closeActivitiesBtn.addEventListener("click", () => {
  activitiesModal.style.display = "none";
});