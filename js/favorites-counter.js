window.addEventListener("DOMContentLoaded", function () {
  const favoriteLink = document.getElementById("favoriteLink");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favoriteLink) {
    favoriteLink.textContent = `Favorites (${favorites.length})`;
  }
});
