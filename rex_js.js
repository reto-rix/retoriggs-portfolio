const accordionHeaders = document.querySelectorAll(".pf-i-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".pf-i-content");
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
    else {
        accordionContent.style.maxHeight = null;

    }
    });
});

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionHeader = header.parentElement;
        const accordionTitle = accordionHeader.querySelector(".pf-i-h-title");
        accordionTitle.classList.toggle("active");

        if (accordionTitle.classList.contains("active")) {
            accordionTitle.style.fontSize = "2em";

        } else {
            accordionTitle.style.fontSize = "20px";
        }

    })
})

/* Menu @media overlay */

const menu = document.getElementById("menuOpen")
const overlay = document.getElementById("menuOverlay")
const close = document.getElementById("menuClose")

menu.addEventListener("click", function() {
    this.classList.toggle("close");
    overlay.classList.toggle("open");
})

close.addEventListener("click", function() {
    overlay.classList.toggle("open");
    menu.classList.toggle("close")
})