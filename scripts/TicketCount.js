// Listens for ticket purchase events and updates total tickets purchased on DOM
const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector('.customers')

export const TicketCount = () => {
    let tickets = 0
    contentTarget.innerHTML = `Total tickets purchased: ${tickets}`

    /* eventHub.addEventListener("ticketPurchased", customEvent => {
        if ("sideshowId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person gawker"></div>
            `
        }
    }) */
}

/*
let tickets = 0
ticketCount.innerHTML = `Total tickets purchased: ${tickets}`
eventHub.addEventListener("click", event => {
    if (event.target.className === "ticketBtn") {
        debugger
        tickets++
    }
})
*/