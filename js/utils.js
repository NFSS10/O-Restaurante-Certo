function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fillRestaurantsArray(restaurants) {
    if(restaurants.length === 0 ) return [];

    while(restaurants.length < 4) {
        restaurants.push(restaurants[Math.floor(Math.random() * restaurants.length)]);
    }
}