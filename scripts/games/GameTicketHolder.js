const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        if ("gameId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person player"></div>
            `
        }
    })
}

