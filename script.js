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


/*function handleForm(formId, successId) {

  const form = document.getElementById(formId);
  const successMessage = document.getElementById(successId);
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    submitButton.disabled = true;
    submitButton.innerHTML = "Envoi...";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        successMessage.classList.remove("d-none");
        form.reset();
        submitButton.innerHTML = "✓ Message envoyé";
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (error) {
      console.error(error);
      submitButton.disabled = false;
      submitButton.innerHTML = "Envoyer";
    }
  });
}

handleForm("reservation-form", "reservation-success");
handleForm("contact-form", "contact-success");*/