document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "bright") {
        body.classList.add("bright-mode");
    } else {
        body.classList.add("dark-mode"); // Default to dark
    }

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("bright-mode");
            localStorage.setItem("theme", "bright");
        } else {
            body.classList.remove("bright-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});
