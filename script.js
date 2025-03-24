document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage (default: dark mode)
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    body.classList.add(savedTheme);

    updateButtonIcon(savedTheme);

    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("bright-mode");
            localStorage.setItem("theme", "bright-mode");
            updateButtonIcon("bright-mode");
        } else {
            body.classList.remove("bright-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            updateButtonIcon("dark-mode");
        }
    });

    function updateButtonIcon(mode) {
        themeToggle.textContent = mode === "bright-mode" ? "🌞" : "🌙";
    }
});
