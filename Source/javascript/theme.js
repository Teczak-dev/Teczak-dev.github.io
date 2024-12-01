$(document).ready(function() {

    $("#ToggleBtn").on("click", () => {
        const themeLink = document.getElementById("theme-style-file");
        const currentTheme = themeLink.getAttribute("href");
        if (currentTheme === "Source/CSS/themes/light-main-page.css") {
            newTheme = "Source/CSS/themes/dark-main-page.css";
            $(".slider").addClass("dark-slider");
            changeProfilesImages(true);
        }else {
            newTheme = "Source/CSS/themes/light-main-page.css";
            $(".slider").removeClass("dark-slider");
            changeProfilesImages(false);
        }
        themeLink.setAttribute("href", newTheme);

    });
});
function changeProfilesImages(isDark){
    facebook = $('#fbImg');
    instagram = $('#igImg');
    github = $('#ghImg');
    if(isDark){
        facebook.attr('src', "Source/social-media/fb/Facebook_Logo_Primary.png");
        instagram.attr('src', "Source/social-media/ig/Instagram_Glyph_Gradient.png");
        github.attr('src', "Source/social-media/github/github-mark.png");
    }
    else{
        facebook.attr('src', "Source/social-media/fb/Facebook_Logo_Secondary.png");
        instagram.attr('src', "Source/social-media/ig/Instagram_Glyph_White.png");
        github.attr('src', "Source/social-media/github/github-mark-white.png");
    }
}