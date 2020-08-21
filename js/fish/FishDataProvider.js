const fishCollection = [
    {
        name: "Nemo",
        species: "Clownfish",
        length: 1.5,
        diet: "Copepods",
        location: "Orlando, FL",
        image: "nemo.jpg"
    },
    {
        name: "Torch",
        species: "Flame Angelfish",
        length: 3,
        diet: "Mealworms",
        location: "San Jose, CA",
        image: "torch.jpg"
    },
    {
        name: "Rocky",
        species: "Blue Damselfish",
        length: 2,
        diet: "Copepods",
        location: "Destin, FL",
        image: "rocky.jpg"
    },
    {
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: 5,
        diet: "Mealworms",
        location: "Costa Rica",
        image: "rudy.jpg"
    },
    {
        name: "Simba",
        species: "Lionfish",
        length: 6,
        diet: "Mealworms",
        location: "Argentina",
        image: "simba.jpg"
    },
    {
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: 6,
        diet: "Mealworms",
        location: "Costa Rica",
        image: "mr-freeze.jpg"
    },
    {
        name: "Frodo",
        species: "Yellow Tang",
        length: 4,
        diet: "Mealworms",
        location: "Honolulu, HI",
        image: "frodo.jpg"
    }
];

// export a function that will return a copy of the original array
// this uses the slice method to make the copy
export const useFish = () => {
    return fishCollection.slice()
};

export const mostHolyFish = () => {
    // multiples of 3 length
    const mostHolyFishArr = [];

    for (const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            mostHolyFishArr.push(theFish);
        }
    }

    return mostHolyFishArr;
};

export const soldierFish = () => {
    // multiples of 5 but not incl. multiples of 3 length
    const soldierFishArr = [];

    for (const theFish of fishCollection) {
        if (theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldierFishArr.push(theFish);
        }
    }

    return soldierFishArr;
};

export const nonHolyFish = () => {
    // the rest of the fish
    const nonHolyFishArr = [];

    for (const theFish of fishCollection) {
        if (theFish.length % 3 !== 0 && theFish.length % 5 !== 0) {
            nonHolyFishArr.push(theFish);
        }
    }

    return nonHolyFishArr;
};