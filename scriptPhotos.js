document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "EF3E4630-0767-46F0-A2E1-EAB71A28F473_1_201_a.jpeg",
    "20240211_111755.jpg",
    "DSC_4739 2.jpg",
    "EF3E4630-0767-46F0-A2E1-EAB71A28F473_1_201_a.jpeg",
    "20240211_111755.jpg",
    "DSC_4739 2.jpg",
    "20240211_111755.jpg",
    "DSC_4739 2.jpg"
  ];

  const gallery = document.getElementById("gallery");
  const basePath = "ressources/images/";

  images.forEach(img => {
    gallery.insertAdjacentHTML("beforeend", `
      <div class="col-6 col-lg-3">
        <a href="${basePath}${img}" class="glightbox">
          <img src="${basePath}${img}" class="img-fluid gallery-img">
        </a>
      </div>
    `);
  });

  GLightbox({
    touchNavigation: true,
    loop: true,
    width: "90%",
    height: "90%"
  });

});