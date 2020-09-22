// Listens for ticket purchase events and updates total tickets purchased on DOM
const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector('.customers')

let tickets = 0
contentTarget.innerHTML = `Total tickets purchased: ${tickets}`

export const TicketCount = () => {
    eventHub.addEventListener("click", event => {
        if (event.target.tagName === 'BUTTON') {
            tickets++
        }

        contentTarget.innerHTML = `Total tickets purchased: ${tickets}`
    })
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