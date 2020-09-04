const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTickerHolder = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
        if ("sideshowId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person gawker"></div>
            `
        }
    })
}
