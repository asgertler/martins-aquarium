const fishCollection = [
    {
        name: "Nemo",
        species: "Clownfish",
        length: "1.5 inches",
        diet: "Copepods",
        location: "Orlando, FL",
        image: "nemo.jpg"
    },
    {
        name: "Torch",
        species: "Flame Angelfish",
        length: "3 inches",
        diet: "Mealworms",
        location: "San Jose, CA",
        image: "torch.jpg"
    },
    {
        name: "Rocky",
        species: "Blue Damselfish",
        length: "2 inches",
        diet: "Copepods",
        location: "Destin, FL",
        image: "rocky.jpg"
    },
    {
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: "5 inches",
        diet: "Mealworms",
        location: "Costa Rica",
        image: "rudy.jpg"
    },
    {
        name: "Simba",
        species: "Lionfish",
        length: "6 inches",
        diet: "Mealworms",
        location: "Argentina",
        image: "simba.jpg"
    },
    {
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: "6 inches",
        diet: "Mealworms",
        location: "Costa Rica",
        image: "mr-freeze.jpg"
    },
    {
        name: "Frodo",
        species: "Yellow Tang",
        length: "4 inches",
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