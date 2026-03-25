const moviesData = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    duration: "2h 28min",
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    description:
      "Dom Cobb est un voleur expérimenté – le meilleur dans l'art dangereux de l'extraction.",
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    duration: "2h 32min",
    genres: ["Action", "Drama", "Crime"],
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger",
    description:
      "Batman s'associe au lieutenant Gordon pour démanteler les organisations criminelles.",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    duration: "2h 49min",
    genres: ["Sci-Fi", "Drama"],
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway",
    description:
      "Des explorateurs sont envoyés à travers l'univers via un trou de ver.",
    poster:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    duration: "2h 34min",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: "John Travolta, Uma Thurman",
    description:
      "Les vies de deux hommes de main se mêlent dans une histoire de violence.",
    poster:
      "https://images.unsplash.com/photo-1594909122849-11daa2a0cf2b?w=500&h=750&fit=crop",
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    duration: "2h 16min",
    genres: ["Sci-Fi", "Action"],
    director: "Lana Wachowski",
    cast: "Keanu Reeves, Laurence Fishburne",
    description: "Un hacker découvre que la réalité n'est qu'une simulation.",
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=750&fit=crop",
  },
  {
    id: 6,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    duration: "2h 19min",
    genres: ["Drama", "Thriller"],
    director: "David Fincher",
    cast: "Brad Pitt, Edward Norton",
    description:
      "Un employé de bureau insomniaque forme un club de combat clandestin.",
    poster:
      "https://images.unsplash.com/photo-1550100136-e074fa43d818?w=500&h=750&fit=crop",
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    duration: "2h 22min",
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: "Tom Hanks, Robin Wright",
    description:
      "Les présidences de Kennedy et Johnson vues par un homme avec un QI de 75.",
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    duration: "2h 22min",
    genres: ["Drama"],
    director: "Frank Darabont",
    cast: "Tim Robbins, Morgan Freeman",
    description:
      "Deux hommes emprisonnés développent une amitié sur plusieurs années.",
    poster:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=500&h=750&fit=crop",
  },
  {
    id: 9,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.9,
    duration: "2h 46min",
    genres: ["Sci-Fi", "Action"],
    director: "Denis Villeneuve",
    cast: "Timothée Chalamet, Zendaya",
    description: "Paul Atreides s'associe aux Fremen pour mener la guerre.",
    poster:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&h=750&fit=crop",
  },
  {
    id: 10,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.4,
    duration: "3h",
    genres: ["Drama", "Biography"],
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt",
    description: "L'histoire de J. Robert Oppenheimer et la bombe atomique.",
    poster:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&h=750&fit=crop",
  },
  {
    id: 11,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    duration: "2h 44min",
    genres: ["Sci-Fi", "Drama"],
    director: "Denis Villeneuve",
    cast: "Ryan Gosling, Harrison Ford",
    description: "Un blade runner découvre un secret enfoui depuis longtemps.",
    poster:
      "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?w=500&h=750&fit=crop",
  },
  {
    id: 12,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    duration: "2h 12min",
    genres: ["Drama", "Thriller"],
    director: "Bong Joon Ho",
    cast: "Song Kang-ho, Lee Sun-kyun",
    description:
      "Une famille pauvre s'infiltre dans la vie d'une famille riche.",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
  },
];

let currentMovies = [...moviesData];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentView = "grid";
let currentGenre = "all";
let currentSort = "rating";
let currentQuery = "";
let lastFocusedElement = null;

const moviesGrid = document.getElementById("moviesGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const searchInput = document.getElementById("searchInput");
const genreTags = document.querySelectorAll(".tag");
const viewBtns = document.querySelectorAll(".view-btn");
const sortSelect = document.getElementById("sortSelect");
const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

document.addEventListener("DOMContentLoaded", () => {
  currentSort = sortSelect ? sortSelect.value : "rating";
  sortCurrentMovies();
  renderMovies();
  renderFavorites();
  setupEventListeners();
});

function setupEventListeners() {
  searchInput.addEventListener("input", (e) => {
    filterMovies(e.target.value.toLowerCase(), currentGenre);
  });

  genreTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      genreTags.forEach((t) => t.classList.remove("active"));
      tag.classList.add("active");
      currentGenre = tag.dataset.genre;
      filterMovies(searchInput.value.toLowerCase(), currentGenre);
    });
  });

  viewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentView = btn.dataset.view;
      moviesGrid.classList.toggle("list-view", currentView === "list");
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.getElementById("menuToggle").addEventListener("click", () => {
    const mainNav = document.getElementById("mainNav");
    const isExpanded = mainNav.classList.toggle("active");
    document
      .getElementById("menuToggle")
      .setAttribute("aria-expanded", String(isExpanded));
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      sortCurrentMovies();
      renderMovies();
    });
  }
}

function filterMovies(query, genre) {
  currentQuery = query;
  currentGenre = genre;
  currentMovies = moviesData.filter((movie) => {
    const matchesQuery =
      movie.title.toLowerCase().includes(query) ||
      movie.director.toLowerCase().includes(query);
    const matchesGenre =
      genre === "all" ||
      movie.genres.some((g) => g.toLowerCase().includes(genre));
    return matchesQuery && matchesGenre;
  });
  sortCurrentMovies();
  renderMovies();
}

function sortCurrentMovies() {
  const byTitle = (a, b) =>
    a.title.localeCompare(b.title, "fr", { sensitivity: "base" });

  const byGenre = (a, b) => {
    const a0 = (a.genres?.[0] || "").toLowerCase();
    const b0 = (b.genres?.[0] || "").toLowerCase();
    const cmp = a0.localeCompare(b0, "fr", { sensitivity: "base" });
    if (cmp !== 0) return cmp;
    // Tie-breakers: rating puis titre
    const byRating = b.rating - a.rating;
    return byRating !== 0 ? byRating : byTitle(a, b);
  };

  currentMovies.sort((a, b) => {
    if (currentSort === "genre") return byGenre(a, b);

    // "rating": classement (note) décroissant
    const byRating = b.rating - a.rating;
    if (byRating !== 0) return byRating;

    // Tie-breakers: année décroissante puis titre
    const byYear = b.year - a.year;
    return byYear !== 0 ? byYear : byTitle(a, b);
  });
}

function renderMovies() {
  if (currentMovies.length === 0) {
    moviesGrid.innerHTML =
      '<div class="empty-state" style="grid-column: 1 / -1;">Aucun film trouvé</div>';
    return;
  }
  moviesGrid.innerHTML = currentMovies
    .map((movie) => createMovieCard(movie))
    .join("");
  attachCardListeners();
}

function createMovieCard(movie) {
  const isFavorite = favorites.includes(movie.id);
  return `
        <article class="movie-card" data-id="${movie.id}" tabindex="0" role="button" aria-label="Ouvrir la fiche de ${movie.title}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-rating"><i class="fas fa-star" aria-hidden="true"></i>${movie.rating}</div>
                <button
                  type="button"
                  class="favorite-btn ${isFavorite ? "active" : ""}"
                  data-id="${movie.id}"
                  aria-label="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
                  aria-pressed="${isFavorite ? "true" : "false"}"
                >
                  <i class="${isFavorite ? "fas" : "far"} fa-heart" aria-hidden="true"></i>
                </button>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta"><span><i class="far fa-calendar"></i> ${movie.year}</span><span><i class="far fa-clock"></i> ${movie.duration}</span></div>
                <div class="movie-genres">${movie.genres
                  .slice(0, 3)
                  .map((g) => `<span class="genre-tag">${g}</span>`)
                  .join("")}</div>
            </div>
        </article>
    `;
}

function attachCardListeners() {
  document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".favorite-btn"))
        openModal(parseInt(card.dataset.id));
    });
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      openModal(parseInt(card.dataset.id));
    });
  });
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id));
    });
  });
}

function renderFavorites() {
  const favoriteMovies = moviesData.filter((m) => favorites.includes(m.id));
  if (favoriteMovies.length === 0) {
    favoritesGrid.innerHTML =
      '<p class="empty-state">Aucun film dans vos favoris</p>';
    return;
  }
  favoritesGrid.innerHTML = favoriteMovies
    .map((movie) => createMovieCard(movie))
    .join("");
  document.querySelectorAll(".favorites-grid .movie-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".favorite-btn"))
        openModal(parseInt(card.dataset.id));
    });
  });
  document.querySelectorAll(".favorites-grid .favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(parseInt(btn.dataset.id));
    });
  });
}

function toggleFavorite(movieId) {
  const index = favorites.indexOf(movieId);
  if (index > -1) favorites.splice(index, 1);
  else favorites.push(movieId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderMovies();
  renderFavorites();
  showNotification(index > -1 ? "Retiré des favoris" : "Ajouté aux favoris");
}

function showNotification(message) {
  const notif = document.createElement("div");
  notif.setAttribute("role", "status");
  notif.setAttribute("aria-live", "polite");
  notif.style.cssText =
    "position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #e50914; color: white; padding: 16px 32px; border-radius: 50px; font-weight: 600; z-index: 3000; animation: slideUp 0.3s ease;";
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => notif.remove(), 300);
  }, 2000);
}

function openModal(movieId) {
  const movie = moviesData.find((m) => m.id === movieId);
  if (!movie) return;
  lastFocusedElement = document.activeElement;
  const isFavorite = favorites.includes(movie.id);
  modalBody.innerHTML = `
        <div class="modal-poster"><img src="${movie.poster}" alt="${movie.title}"></div>
        <div class="modal-info">
            <h2 class="modal-title" id="modalTitle">${movie.title}</h2>
            <div class="modal-meta">
                <span class="modal-rating"><i class="fas fa-star"></i>${movie.rating}/10</span>
                <span class="modal-meta-item"><i class="far fa-calendar"></i>${movie.year}</span>
                <span class="modal-meta-item"><i class="far fa-clock"></i>${movie.duration}</span>
            </div>
            <div class="movie-genres" style="margin-bottom: 24px;">${movie.genres.map((g) => `<span class="genre-tag">${g}</span>`).join("")}</div>
            <p class="modal-description" id="modalDescription">${movie.description}</p>
            <div class="modal-details">
                <div class="detail-item"><div class="detail-label">Réalisateur</div><div class="detail-value">${movie.director}</div></div>
                <div class="detail-item"><div class="detail-label">Casting</div><div class="detail-value">${movie.cast}</div></div>
            </div>
            <div class="modal-actions">
                <button
                  class="btn btn-primary"
                  id="modalFavoriteBtn"
                  type="button"
                  aria-pressed="${isFavorite ? "true" : "false"}"
                  aria-label="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
                >
                  <i class="${isFavorite ? "fas" : "far"} fa-heart" aria-hidden="true"></i>
                  ${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                </button>
                <button class="btn btn-secondary" type="button" onclick="closeModal()">
                  <i class="fas fa-times" aria-hidden="true"></i>Fermer
                </button>
            </div>
        </div>
    `;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
  if (modalFavoriteBtn) {
    modalFavoriteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(movie.id);
      updateModalFavoriteState(movie.id);
    });
  }

  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function updateModalFavoriteState(movieId) {
  const isFavorite = favorites.includes(movieId);
  const btn = document.getElementById("modalFavoriteBtn");
  if (!btn) return;

  const label = isFavorite ? "Retirer des favoris" : "Ajouter aux favoris";
  btn.setAttribute("aria-pressed", isFavorite ? "true" : "false");
  btn.setAttribute("aria-label", label);
  btn.innerHTML = `<i class="${isFavorite ? "fas" : "far"} fa-heart" aria-hidden="true"></i>${label}`;
}
