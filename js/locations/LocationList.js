import {useLocation} from './LocationDataProvider.js';
import {Location} from './Location.js';

export const LocationList = () => {
    const contentElement = document.querySelector(".locationList")
    const locations = useLocation()

    let locationHTMLReprensentation = ""
    for (const place of locations) {
        locationHTMLReprensentation += Location(place);
    };

    contentElement.innerHTML += `
            ${locationHTMLReprensentation}
    `
};