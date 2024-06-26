import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li
        data-type="venue"
        data-id="${venue.id}"
        >${venue.name}</li>`
    }
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            const id = itemClicked.dataset.id
            let bandies = []
            let performers = []
            const bookings = getBookings()
            const bands = getBands()
            for (const booking of bookings) {
                if (parseInt(id) === booking.venueId) {
                    bandies.push(booking.bandId)
                }
            }
            for (const band of bands) {
                if (bandies.includes(band.id)) {
                    performers.push(band.name)
                }
            }
            window.alert(`The bands booked to perform at this venue include \n${performers.join(", ")}.`)
        }
    }
)