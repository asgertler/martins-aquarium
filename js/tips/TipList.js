import {useTips} from './TipDataProvider.js';
import {Tip} from './Tip.js';

export const TipList = () => {
    const contentElement = document.querySelector(".tipList")
    const tips = useTips()

    let fishHTMLRepresentations = ""
    for (const tip of tips) {
        fishHTMLRepresentations += Tip(tip);
    };

    contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
};