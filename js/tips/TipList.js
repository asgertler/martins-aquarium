import {useTips} from './TipDataProvider.js';
import {Tip} from './Tip.js';

export const TipList = () => {
    const contentElement = document.querySelector(".tipList")
    const tips = useTips()

    let tipHTMLRepresentation = ""
    for (const tip of tips) {
        tipHTMLRepresentation += Tip(tip);
    };

    contentElement.innerHTML += `
            ${tipHTMLRepresentation}
    `
};