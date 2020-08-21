// FishList.js renders individual fish objects as HTML

import {mostHolyFish, soldierFish, nonHolyFish, useFish} from './FishDataProvider.js';
import {Fish} from './Fish.js';

export const FishList = () => {
    // const fishes = useFish();
    const tier1 = mostHolyFish();
    addFishToDom(tier1); 

    const tier2 = soldierFish();
    addFishToDom(tier2);

    const tier3 = nonHolyFish();
    addFishToDom(tier3);
};

const addFishToDom = (whichFishArr) => {
    const contentElement = document.querySelector(".fishList")
    let fishHTMLRepresentations = ""
    for (const fish of whichFishArr) {
        fishHTMLRepresentations += Fish(fish);
    };

    contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
};