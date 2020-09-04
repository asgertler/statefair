const eventHub = document.querySelector("#state-fair")
const ridesTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gamesTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")

export const FullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        if ("fullPackageId" in customEvent.detail) {
            ridesTarget.innerHTML += `
            <div class="person bigSpender"></div>
            `,
                foodTarget.innerHTML += `
            <div class="person bigSpender"></div>
            `,
                gamesTarget.innerHTML += `
            <div class="person bigSpender"></div>
            `,
                sideshowTarget.innerHTML += `
            <div class="person bigSpender"></div>
            `
        }
    })
}
