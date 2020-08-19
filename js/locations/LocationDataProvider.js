const locationCollection = [
    {
        name: "Argentina",
        rating: "4/5",
        comment: "Great place for harvesting. Hotels are expensive and expect long drives, however."
    },
    {
        name: "Costa Rica",
        rating: "5/5",
        comment: "Fantastic harvesting community. Flights and accomodations are suprisingly affordable. Love it!"
    },
    {
        name: "Destin, FL",
        rating: "4/5",
        comment: "Easy to get to and welcoming harvesting community. Lots of tourists, though."
    },
    {
        name: "Honolulu, HI",
        rating: "5/5",
        comment: "GORGEOUS REEFS! Some of the best harvesting around!"
    },
    {
        name: "Orlando, FL",
        rating: "3/5",
        comment: "Decent harvesting but way too many tourists, and the hotels cost a fortune thanks to Disney."
    },
    {
        name: "San Jose, CA",
        rating: "4/5",
        comment: "Excellent harvesting community and fairly quiet. Some local laws may interfere with some spots."
    }
];

export const useLocation = () => {
    return locationCollection.slice()
};