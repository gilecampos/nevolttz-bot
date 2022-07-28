let show = true;

const menuSection = document.querySelector(".header-menu")
const menuToggle = document.querySelector(".header-menu--toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})