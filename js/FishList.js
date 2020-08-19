// FishList.js renders individual fish objects as HTML

import {useFish} from './FishDataProvider.js';
import {Fish} from './Fish.js';

export const FishList = () => {
    // Get a reference to the '<div class="content">' element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        
    };

    contentElement.innerHTML += `
        <div class="fishList">
        All the fish go here!
            ${fishHTMLRepresentations}
        </div>
    `
};