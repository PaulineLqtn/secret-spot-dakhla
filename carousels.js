document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const id = carousel.dataset.id
  const images = JSON.parse(carousel.dataset.images)

  carousel.id = `carousel-${id}`

  carousel.innerHTML = `
    <div class="carousel-inner">
      ${images.map((img, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="https://secretspot-media.s3.eu-west-3.amazonaws.com/photos/${img}" class="section-img">
        </div>
      `).join('')}
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${id}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${id}" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  `
})