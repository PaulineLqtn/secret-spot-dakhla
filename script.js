pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
  
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


const pensionModal = document.getElementById("pensionModal");
const pensionContent = document.getElementById("pension-content");

document.getElementById("openPensionBtn").addEventListener("click", async () => {
  pensionModal.style.display = "flex";

  try {
    const response = await fetch("./content/pension.md");
    const markdown = await response.text();
    pensionContent.innerHTML = marked.parse(markdown);
  } catch (error) {
    pensionContent.innerHTML = "Impossible de charger les tarifs.";
  }
});

document.getElementById("closePensionBtn").addEventListener("click", () => {
  pensionModal.style.display = "none";
});


const openBtn = document.getElementById("openActivitiesBtn");
const activitiesModal = document.getElementById("activitiesModal");
const closeActivitiesBtn = document.getElementById("closeActivities");

openBtn.addEventListener("click", async () => {
  activitiesModal.style.display = "flex";
});

closeActivitiesBtn.addEventListener("click", () => {
  activitiesModal.style.display = "none";
});

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function() {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.innerText = "Envoi...";
    }
  });
});