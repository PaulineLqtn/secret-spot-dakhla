const avisData = [
  {
    texte: "Secret Spot allie la bonne humeur à la douceur marocaine dans un cadre chaleureux et convivial. L’équipe est aux petits soins, la cuisine délicieuse et les tentes confortables. La lagune, ventée et magnifique, est idéale pour apprendre ou progresser en kite-surf.<br>Parfait pour un voyage en solo ou en groupe, c’est bien plus qu’un simple spot de kite : un véritable havre de paix, propice au partage et aux rencontres. J’y ai passé 10 jours inoubliables entourée de belles personnes. Je recommande à 300 % !”</p>",
    auteur: "Alicia O.",
    etoiles: 5
  },
  {
    texte: "Certains rencontrent Dieu dans leur vie, moi la semaine dernière j'ai rencontré Secret Spot! Il y aura un avant et un après ! C'est pas un quelquonque lieu pour faire du tourisme nautique, cest un concept rare, la survivance d’une époque où l’humain était au centre, où la relation créé la vie ou l’union faisait du bien. Même ceux qui viennent par hasard, au détour du chemin, font partie de l'équipe, presque de la famille! Merci la vie qu'il y ait encore des paradis cachés, amoureusement pilotés par des Marseillais au grand coeur et des Marocains géniaux!",
    auteur: "Michel D.",
    etoiles: 5
  },
  {
    texte: "Expérience de ouf, un des plus beaux lieus ou j'ai pu kiter. Tous les gens du camp du secret spot sont super sympa, l'hébergement très correct, on dors super bien, ambiance au top, du vent tous les jours. J'ai passé une semaine extraordinaire , hors du temps, au bord de cette lagune incroyable.",
    auteur: "Sébastien C.",
    etoiles: 5
  },
  {
    texte: "Super accueil et organisation parfaite !",
    auteur: "Marc L.",
    etoiles: 5
  },
];

const testimonialContainer = document.getElementById("testimonial-row");

avisData.forEach(avis => {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-3";

  col.innerHTML = `
    <div class="testimonial-card p-3 h-100">
      <div class="testimonial-header d-flex align-items-center mb-2">
        <img src="content/google.webp" 
             alt="Google" class="google-logo me-2">
        <div class="stars">${'★'.repeat(avis.etoiles)}</div>
      </div>
      <p>${avis.texte}</p>
      <span>- ${avis.auteur}</span>
    </div>
  `;

  testimonialContainer.appendChild(col);
});