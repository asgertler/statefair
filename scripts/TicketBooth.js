const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                rideId: clickEvent.target.id
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                foodId: clickEvent.target.id
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                gameId: clickEvent.target.id
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                sideshowId: clickEvent.target.id
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                fullPackageId: clickEvent.target.id
            }
        })
        eventHub.dispatchEvent(fullPackageEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth" id="ticketBooth">
            <button class="ticketBtn" id="rideTicket">Ride Ticket</button>
            <button class="ticketBtn" id="foodTicket">Food Ticket</button>
            <button class="ticketBtn" id="gameTicket">Game Ticket</button>
            <button class="ticketBtn" id="sideshowTicket">Sideshow Ticket</button>
            <button class="ticketBtn" id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}
