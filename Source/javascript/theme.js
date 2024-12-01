$(document).ready(function() {

    document.addEventListener('DOMContentLoaded', ()=> {
        const themeLink = document.getElementById("theme-style-file");
        const savedTheme = localStorage.getItem("theme") || "light-theme.css";
        themeLink.setAttribute("href", savedTheme);
    })

    $("#ToggleBtn").on("click", () => {
        const themeLink = document.getElementById("theme-style-file");
        const currentTheme = themeLink.getAttribute("href");
        if (currentTheme === "Source/CSS/themes/light-main-page.css") {
            newTheme = "Source/CSS/themes/dark-main-page.css";
            $(".slider").addClass("dark-slider");
        }else {
            newTheme = "Source/CSS/themes/light-main-page.css";
            $(".slider").removeClass("dark-slider");
        }
        themeLink.setAttribute("href", newTheme);
        localStorage.setItem("theme", newTheme);

    });
});