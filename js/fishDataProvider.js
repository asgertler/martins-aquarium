const fishCollection = [
    {
        name: "Nemo",
        species: "Clownfish",
        length: "1.5 inches",
        diet: "Copepods",
        harvestLocation: "Orlando, FL"
    },
    {
        name: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
        harvestLocation: "San Jose, CA"
    },
    {
        name: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
        harvestLocation: "Destin, FL"
    },
    {
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Argentina"
    },
    {
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: "6 inches",
        diet: "Mealworms",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Frodo",
        species: "Yellow Tang",
        length: "4 inches",
        diet: "Mealworms",
        harvestLocation: "Honolulu, HI"
    }
]

// export a function that will return a copy of the original array
// this uses the slice method to make the copy
export const useFish = () => {
    return fishCollection.slice()
}