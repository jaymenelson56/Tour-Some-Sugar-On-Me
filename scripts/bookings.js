import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

const findBand = (isUp, show) => {
    let bandIsUp = null
    for (const up of isUp) {
        if (up.id === show.bandId) {
            bandIsUp = up.name
        }
    }
    return bandIsUp
}

const findVenue = (stages, show) => {
    let setStage = null
    for (const stage of stages) {
        if (stage.id === show.venueId) {
            setStage = stage.name
        }
    }
    return setStage
}

export const Bookings = () => {
    let html = "<ul>"

    for (const booking of bookings) {
        const theBand = findBand(bands, booking)
        const theVenue = findVenue(venues, booking)


        html += `<li data-type="booking"
"        data-id="${booking.id}"
        data-band="${booking.bandId}"
        > ${theBand} is playing at ${theVenue} on ${booking.date} at ${booking.time}</li>`

    }
    html += "</ul>"

    return html
}




document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "booking") {
            const id = itemClicked.dataset.id
            const bandId = itemClicked.dataset.band
          let bandie = null
            for (const band of bands) {
                if (parseInt(bandId) === band.id) {
                  bandie = band
                }
            }
            window.alert(`${bandie.name}\n${bandie.genre}\nFormed in ${bandie.year}\n${bandie.count} band members.`)
        }
    }
)