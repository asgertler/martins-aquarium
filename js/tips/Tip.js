export const Tip = (tipObj) => {
    return `
        <div class="tipList_card">
            <h3>${tipObj.name}</h3>
            <p>${tipObj.tip}</p>
        </div>
    `
};