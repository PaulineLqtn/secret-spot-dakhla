document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "A7404314.webp",
    "A7402125-2.webp",
    "A7403416.webp",
    "A7402653.webp",
    "A7400736.webp",
    "A7402636.webp",
    "A7403320.webp",
    "A7401224-2.webp",
    "A7400792.webp",
    "A7402853-2.webp",
    "A7400870-2.webp",
    "A7401995.webp",
    "A7402885.webp",
    "AP2A1901.webp",
    "AP2A2068.webp",
    "A7403411.webp",
    "A7400838.webp",
    "AP2A1921.webp",
    "A7402319.webp",
    "A7403324.webp",
    "A7404390.webp",
    "A7400848.webp",
    "A7404228.webp",
    "A7400832.webp",
    "A7404442.webp",
    "A7404354.webp",
    "A7404386.webp",
    "AP2A1965.webp",
    "A7404341.webp",
    "A7401583.webp",
    "A7404263.webp",
    "A7404250.webp",
    "A7401345.webp",
    "A7404410.webp",
    "A7404383.webp",
    "A7403332.webp",
    "A7404049.webp",
    "A7400986.webp",
    "A7404052.webp",
    "A7402193-2.webp",
    "A7401246.webp",
    "AP2A2032.webp",
    "A7404105.webp",
    "A7404338.webp",
    "A7404191.webp",
    "A7401808.webp",
    "AP2A2029.webp",
    "A7403810.webp"
  ];

  const gallery = document.getElementById("gallery");
  const basePath = "https://secretspot-media.s3.eu-west-3.amazonaws.com/photos/";

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