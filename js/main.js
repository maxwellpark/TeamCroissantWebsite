const navItems = document.querySelectorAll(".Header-nav-item");

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        const targetId = navItem.getAttribute("data-target");
        console.log("Scroll target: " + targetId);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
