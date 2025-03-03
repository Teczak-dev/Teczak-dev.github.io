$(document).ready(function() {

    window.addEventListener('resize',  toogleMove )
    window.addEventListener('scroll', toogleMove );

    $("#ToggleBtn").on("click", () => {
        const themeLink = document.getElementById("theme-style-file");
        const currentTheme = themeLink.getAttribute("href");
        if (currentTheme === "Source/CSS/themes/light-main-page.css") {
            newTheme = "Source/CSS/themes/dark-main-page.css";
            $(".slider").addClass("dark-slider");
            animWeb(true);
        }else {
            newTheme = "Source/CSS/themes/light-main-page.css";
            $(".slider").removeClass("dark-slider");
            animWeb(false);
        }
        setTimeout(()=>{
        themeLink.setAttribute("href", newTheme);
        },1000)

    });
});
function changeProfilesImages(isDark){
    if(isDark){
        $("#links-black").css("display", "flex");
        $("#links-white").css("display", "none");
    }
    else{
        $("#links-white").css("display", "flex");
        $("#links-black").css("display", "none");
    }
}
function animWeb(isBlack){
    block = $("#animWebsite");
    block.css({
        "top": "120vh",
    })
    setTimeout(()=>{

        changeProfilesImages(isBlack);
        block.css({
            "display": "block",
            "top": "0"
        })
    },1000);

}

function toogleMove(){
    if (window.innerWidth < 600 && window.scrollY>30) {
        $("#toogleBtnContainer").css("top","5px")
    }
    else if(window.innerWidth < 600 && window.scrollY<30){
        $("#toogleBtnContainer").css("top","110px")
    }
    else{
        $("#toogleBtnContainer").css("top","5px")
    }
}

function openDemo(projectName){
    if (projectName == "projekt1") location.href = "podstrony/projekt1/index.html";

}
function previewDemo(projectName){
    
    // podgląd strony ( coś w stylu pokazania malego okna które się powiększa i dookoła jest obramówka z napisem Preview/Podgląd i w kadej chwili mozna zamknąć )

}