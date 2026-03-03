document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const id = carousel.dataset.id
  const images = JSON.parse(carousel.dataset.images)

  carousel.id = `carousel-${id}`

  carousel.classList.add('carousel', 'slide')

  carousel.innerHTML = `
    <!-- INDICATEURS -->
    <div class="carousel-indicators">
      ${images.map((_, i) => `
        <button
          type="button"
          data-bs-target="#carousel-${id}"
          data-bs-slide-to="${i}"
          class="${i === 0 ? 'active' : ''}"
          aria-current="${i === 0 ? 'true' : 'false'}"
          aria-label="Slide ${i + 1}">
        </button>
      `).join('')}
    </div>

    <!-- SLIDES -->
    <div class="carousel-inner">
      ${images.map((img, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="https://secretspot-media.s3.eu-west-3.amazonaws.com/photos/${img}" class="section-img">
        </div>
      `).join('')}
    </div>

    <!-- CONTROLES -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carousel-${id}" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    </button>
  `
})

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: false,     // ne démarre pas automatiquement
    pause: false,
    wrap: true
  })

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        carouselInstance.cycle()   // démarre
      } else {
        carouselInstance.pause()   // stop quand hors écran
      }
    })
  }, {
    threshold: 0.6 // démarre quand 60% visible
  })

  observer.observe(carousel)
})