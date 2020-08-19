// Fish.js renders individual fish objects as HTML

export const Fish = (fishObj) => {
    return `
        <div class="fishList_card">
            <div class="fishList_card_image">
                <div><img class="image_fish" src="img/${fishObj.image}" alt="${fishObj.name} /></div>
            </div>
            <ul>
                <li>Name: ${fishObj.name}</li>
                <li>Species: ${fishObj.species}</li>
                <li>Length: ${fishObj.length}</li>
                <li>Harvested: ${fishObj.location}</li>
                <li>Eats: ${fishObj.diet}</li>
            </ul>
        </div>
    `
};