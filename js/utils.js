function scaleWheelBackground(wheelBackgroundDiv) {
    const scaleX = window.innerWidth / 2560;
    const scaleY = window.innerHeight / 1440;

    const scale = scaleX < scaleY ? scaleX : scaleY;
    wheelBackgroundDiv.style.scale = scale;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fillRestaurantsArray(restaurants) {
    if (restaurants.length === 0) return [];

    while (restaurants.length < 4) {
        restaurants.push(restaurants[Math.floor(Math.random() * restaurants.length)]);
    }
}

function getRestaurantNamesElements(wheel) {
    const restaurantNamesElements = [];
    for (let i = 0; i < wheel.children.length; i++) {
        restaurantNamesElements.push(wheel.children[i].getElementsByClassName("restaurant-name")[0]);
    }

    return restaurantNamesElements;
}
