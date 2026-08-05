const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const container = document.getElementById("favoritesList");

if (favorites.length === 0) {

    container.innerHTML = `
        <h2 style="text-align:center;">
             No Favorite Properties Found
        </h2>
    `;

} else {

    favorites.forEach(property => {
        const image = property.image || (property.images && property.images[0]) || "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg";

        container.innerHTML += `

        <div class="favorite-card">

            <img src="${image}" alt="${property.name}">

            <div class="favorite-body">

                <h3>${property.name}</h3>

                <p>📍 ${property.location}</p>

                <p><strong>💰 ${property.price}</strong></p>

                <div class="buttons">

                    <button class="view-btn"
                    onclick="window.location.href='property-info.html?id=${property.id}'">

                        View Details

                    </button>

                    <button class="remove-btn"
                    onclick="removeFavorite(${property.id})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

function removeFavorite(id) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites = favorites.filter(item => item.id !== id);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    location.reload();

}
