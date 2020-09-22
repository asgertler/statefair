eventHub.addEventListener("click", event => {
    const contentTarget = document.querySelector(".customers")

    let tickets = 0
    contentTarget.innerHTML = `Total tickets purchased: ${tickets}`

    if (event.target.className === "ticketBtn") {
        ticket++
    }
})