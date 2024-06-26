import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
        data-type="band"
        data-id="${band.id}"
        >${band.name}</li>`
    }
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "band") {
            const id = itemClicked.dataset.id
            let stages = []
            let vendies = []
            const bookings = getBookings()
            const venues = getVenues()
            for (const booking of bookings) {
                if (parseInt(id) === booking.bandId) {
                    stages.push(booking.venueId)
                }
            }
            for (const venue of venues) {
                if (stages.includes(venue.id)) {
                    vendies.push(venue.name)
                }
            }
            window.alert(`This band is playing at \n${vendies.join(", ")}.`)
        }
    }
)