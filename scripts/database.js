const database = {
    venues: [
        {
            id: 1,
            name: "Civic Center",
            adress: "1234 Civic Street Nashville TN",
            sqFeet: 7000,
            maxCapacity: 1166
        },
        {
            id: 2,
            name: "The Woods",
            adress: "2345 Civic Street, Nashville TN",
            sqFeet: 5000,
            maxCapacity: 833
        },
        {
            id: 3,
            name: "Woodville",
            adress: "1234 Wood Lane, Murfreesboro TN",
            sqFeet: 6500,
            maxCapacity: 1083
        },
        {
            id: 4,
            name: "Woody Way",
            adress: "1234 Wood Row, Smryna TN",
            sqFeet: 5500,
            maxCapacity: 916
        },
    ],
    bands: [
        {
            id: 1,
            name: "Toejam and Earl",
            count: 2,
            genre: "Hip Hop",
            year: 1991

        },
        {
            id: 2,
            name: "Tower of Arby's",
            count: 5,
            genre: "Metal",
            year: 2001

        },
        {
            id: 3,
            name: "Where are the Woods",
            count: 5,
            genre: "Rock",
            year: 2011

        },
        {
            id: 4,
            name: "Country Lemonade",
            count: 2,
            genre: "Country",
            year: 2021

        },
        {
            id: 5,
            name: "Musical Chairs",
            count: 4,
            genre: "Pop",
            year: 2022

        },
    ],
    bookings: [
        { id: 1, bandId: 1, venueId: 1, date: "February 14, 2024", time: "5:00 PM"},
        { id: 2, bandId: 2, venueId: 1, date: "February 14, 2024", time: "7:00 PM" },
        { id: 3, bandId: 3, venueId: 2, date: "February 14, 2024", time: "7:00 PM" },
        { id: 4, bandId: 4, venueId: 3, date: "February 14, 2024", time: "7:00 PM" },
        { id: 5, bandId: 2, venueId: 4, date: "February 16, 2024", time: "6:00 PM"},
        { id: 6, bandId: 1, venueId: 4, date: "February 16, 2024", time: "8:00 PM"},
        { id: 7, bandId: 3, venueId: 1, date: "February 16, 2024", time: "7:00 PM"},
        { id: 8, bandId: 5, venueId: 4, date: "February 17, 2024", time: "8:00 PM"},
    ]
}
 
export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}
export const getBands = () => {
    return database.bands.map(band => ({...band}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}