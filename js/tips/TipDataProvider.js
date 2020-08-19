const tipCollection = [
    {
        name: "Tip #1",
        tip: "Feed your fish!"
    },
    {
        name: "Tip #2",
        tip:"Change the water twice a month!"
    },
    {
        name: "Tip #3",
        tip: "Fish are friends, not food!"
    }
];

export const useTips = () => {
    return tipCollection.slice()
};