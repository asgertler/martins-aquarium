export const Tip = (tipObj) => {
    return `
        <div class="tipList_card">
            <h2>${tipObj.name}</h2>
            <p>${tipObj.tip}</p>
        </div>
    `
};