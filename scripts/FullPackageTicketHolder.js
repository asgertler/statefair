const eventHub = document.querySelector("#state-fair")
const ridesTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gamesTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        if ("sideshowId" in customEvent.detail) {
            contentTarget.innerHTML += `
            <div class="person gawker"></div>
            `
        }
    })
}
