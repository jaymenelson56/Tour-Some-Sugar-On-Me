import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const mainContainer = document.querySelector("#container")

const appHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Bookings</h2>
    ${Bookings()}
</article>
<article class="details">
    <section class="detail--column">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column">
        <h2>Bands</h2>
         ${Bands()}
    </section>
</article>
`
mainContainer.innerHTML = appHTML




// import { Employees } from "./Employees.js"
// import { Orders } from "./Orders.js"
// import { Products } from "./Products.js"

// const mainContainer = document.querySelector("#container")

// const applicationHTML = `
// <h1>Brewed Awakenings</h1>
// <article class="details">
//     <section class="detail--column list details__employees">
//         <h2>Employees</h2>
//         ${Employees()}
//     </section>
//     <section class="detail--column list details__products">
//         <h2>Products</h2>
//         ${Products()}
//     </section>
// </article>

// <article class="orders">
//     <h2>Orders</h2>
//     ${Orders()}
// </article>
// `

// mainContainer.innerHTML = applicationHTML
