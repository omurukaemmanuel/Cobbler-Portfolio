const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

// Open and close the mobile navigation
menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) {
        lucide.createIcons();
    }
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuButton.innerHTML =
            '<i data-lucide="menu"></i>';

        // Update the active navigation link
        document.querySelectorAll(".main-nav a")
            .forEach(item => {
                item.classList.remove("active");
            });

        link.classList.add("active");

        if (window.lucide) {
            lucide.createIcons();
        }
    });
});

// Display Lucide icons throughout the website
if (window.lucide) {
    lucide.createIcons();
}