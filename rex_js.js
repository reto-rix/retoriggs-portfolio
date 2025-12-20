const accordionHeaders = document.querySelectorAll('.pf-i-header');

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.pf-i-content');
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

/* Encode Email Contact */
var encEmail = "aW5mb0ByZXRvcmlnZ3MuY2g=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));