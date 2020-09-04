const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolder = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        if ("foodId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person food"></div>
            `
        }
    })
}

