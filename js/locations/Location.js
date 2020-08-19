export const Location = (locationObj) => {
    return `
        <div class="locationList_card">
            <h3>${locationObj.name}</h3>
                <ul>
                    <li class="location-rating">${locationObj.rating}</li>
                    <li class="location-comment">${locationObj.comment}</li>
                </ul>
        </div>
    `
};