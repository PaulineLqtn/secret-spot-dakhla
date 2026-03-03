const avisData = [
  {
    texte: `Génial !
    <br>C’est déjà la deuxième fois maintenant que je me rends sur ce camps, et je ressors avec pleins de nouvelles expériences, pleins de moments géniaux, et pleins de magie.
    <br>Les tentes ont été refaites, et cela offre un confort supplémentaire. Chaque membre du personnel à sa propre personnalité et on s’y attache vite.
    <br>Le spot de kite est juste parfait, les profs sont super cool, chouette vibes, rien à dire.
    <br>Merci à vous tous pour ce séjour.
    <br>J’ai hâte de revenir dans ce petit coin de paradis.`,
    auteur: "Romain L.",
    etoiles: 5
  },
  {
    texte: `Secret Spot rassemble la bonne humeur marseillaise avec la douceur de vivre des marocains.
    <br>Le staff est adorable, on y mange des délicieux plats locaux dans une ambiance conviviale. Le vent souffle au quotidien dans une lagune parsemée d’herbiers. Un cadre idéal pour apprendre le kite surf et s’épanouir.
    <br>Plus qu’un spot de kite-surf, le camp permet le partage, la découverte et la rencontre. Thiery et sa bande ont créé un petit cocon qui conquit tous ceux qui ont eu la chance d’y passer. Je ne me vois nul part ailleurs qu’ici pour un séjour à Dakhla.`,
    auteur: "Nathalie D.",
    etoiles: 5
  },
  {
    texte: `Comment trouver les mots… cet endroit a quelque chose de magique. On s’y sent instantanément bien. J’y ai passé le plus bel anniversaire et le meilleur nouvel an de ma vie!
    <br>Merci encore à toute l’équipe du secret spot pour leur disponibilité, leur gentillesse et leurs sourires ✨
    <br>J’ai déjà hâte de l’édition 2…`,
    auteur: "Clara F.",
    etoiles: 5
  },
  {
    texte: `Une semaine inoubliable au secret spot en pleine nature avec un panorama à couper le souffle entre l’eau, le désert et les ami.e.s.
    <br>Je suis rentrée avec des souvenirs incroyables tant du paysage, que des moments partagés et personnes rencontrées. À très bientôt j’en suis sûre !!`,
    auteur: "Thelma S.",
    etoiles: 5
  },
  {
    texte: `Secret Spot allie la bonne humeur à la douceur marocaine dans un cadre chaleureux et convivial. L’équipe est aux petits soins, la cuisine délicieuse et les tentes confortables. La lagune, ventée et magnifique, est idéale pour apprendre ou progresser en kite-surf.
    <br>Parfait pour un voyage en solo ou en groupe, c’est bien plus qu’un simple spot de kite : un véritable havre de paix, propice au partage et aux rencontres. J’y ai passé 10 jours inoubliables entourée de belles personnes. Je recommande à 300 % !`,
    auteur: "Alicia O.",
    etoiles: 5
  },
  {
    texte: `Certains rencontrent Dieu dans leur vie, moi la semaine dernière j'ai rencontré Secret Spot! Il y aura un avant et un après !
    <br>C'est pas un quelquonque lieu pour faire du tourisme nautique, cest un concept rare, la survivance d’une époque où l’humain était au centre, où la relation créé la vie ou l’union faisait du bien. Même ceux qui viennent par hasard, au détour du chemin, font partie de l'équipe, presque de la famille!
    <br>Merci la vie qu'il y ait encore des paradis cachés, amoureusement pilotés par des Marseillais au grand coeur et des Marocains géniaux!`,
    auteur: "Michel D.",
    etoiles: 5
  },
  {
    texte: `Expérience de ouf, un des plus beaux lieus ou j'ai pu kiter. Tous les gens du camp du secret spot sont super sympa, l'hébergement très correct, on dors super bien, ambiance au top, du vent tous les jours. J'ai passé une semaine extraordinaire , hors du temps, au bord de cette lagune incroyable.`,
    auteur: "Sébastien C.",
    etoiles: 5
  },
  {
    texte: `Un véritable coup de cœur !
    <br>Le Secret Spot à Dakhla, c’est bien plus qu’un simple camp : c’est une petite bulle de bonheur au bout du monde. L’ambiance y est ultra conviviale, presque familiale — on s’y sent tout de suite chez soi.
    <br>Malgré le vent absent durant notre semaine , on ne s’ennuie jamais : entre les sessions de kite, les balades, le surf, les jeux, les moments partagés autour d’un bon repas… les journées sont bien remplies et toujours dans la bonne humeur.
    <br>L’énergie du lieu est incroyable, et les rencontres y sont sincères. Une vraie parenthèse de déconnexion et de fun. À vivre et à revivre sans modération !`,
    auteur: "Arthur S.",
    etoiles: 5
  },
];

const testimonialInner = document.getElementById("testimonial-inner");

function getChunkSize() {
  const width = window.innerWidth;
  if (width < 576) return 2;      // mobile
  if (width < 992) return 2;      // tablette (md)
  return 4;                        // desktop (lg)
}

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const groupedAvis = chunkArray(avisData, getChunkSize());

groupedAvis.forEach((group, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

  const row = document.createElement("div");
  row.className = "row g-4 justify-content-center";

  group.forEach(avis => {
    const col = document.createElement("div");
    col.className = "col-10 col-md-6 col-lg-3";

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

    row.appendChild(col);
  });

  carouselItem.appendChild(row);
  testimonialInner.appendChild(carouselItem);
});