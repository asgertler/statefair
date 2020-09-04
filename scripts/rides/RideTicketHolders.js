const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolder = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        if ("rideId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person rider"></div>
            `
        }
    })
}

