function updateSlotsOrder(restaurants, restaurantNamesElements, timesUpdated) {
    restaurantNamesElements.forEach((element, index) => {
        const restaurantIndex = (timesUpdated - index + restaurants.length) % restaurants.length;
        element.innerHTML = restaurants[restaurantIndex];
    });
}

function wheelStep(topValue, velocity, timesUpdated, restaurants, restaurantNamesElements) {
    setTimeout(() => {
        if (wheel.offsetTop >= 0) {
            topValue = -459;
            timesUpdated++;

            updateSlotsOrder(restaurants, restaurantNamesElements, timesUpdated);
        }
        else {
            topValue = wheel.offsetTop + velocity;
        }

        wheel.style.top = `${topValue}px`;

        console.log(velocity);
        if (velocity > 0) {
            velocity -= 1;
            wheelStep(topValue, velocity, timesUpdated, restaurants, restaurantNamesElements);
        }
    }, 0);
}

function startWheelSpin(wheel, restaurants) {
    let velocity = 300;

    const restaurantNamesElements = [];
    for (let i = 0; i < wheel.children.length; i++) {
        restaurantNamesElements.push(wheel.children[i].getElementsByClassName("restaurant-name")[0]);
    }

    let topValue = -459;
    let timesUpdated = 0;
    updateSlotsOrder(restaurants, restaurantNamesElements, timesUpdated);

    wheelStep(topValue, velocity, timesUpdated, restaurants, restaurantNamesElements);
}

function spinWheel() {
    const wheel = document.getElementById("wheel");
    const restaurants = config.restaurants;

    fillRestaurantsArray(restaurants);
    shuffleArray(restaurants);

    startWheelSpin(wheel, restaurants);
}