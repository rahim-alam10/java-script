const menuOpenBuutton = document.querySelector("#menu-open-button")

menuOpenBuutton.addEventListener("click", () => (
    document.body.classList.toggle("show-mobile-menu")
))

const menuCloseBuutton = document.querySelector("#menu-close-button")

// When the Close Button is clicked, Pretend it like open Button  is Pressed
menuCloseBuutton.addEventListener("click", () => menuOpenBuutton.click());