let header_btn = document.querySelector(".header-icon")
let headerIcon = document.querySelector(".header-icon i")
let taggleMenue = document.querySelector(".menu")

header_btn.addEventListener("click", function(){
    if (headerIcon.className == "fa fa-bars"){
    taggleMenue.style.left = "-2rem";
    headerIcon.className = "fa fa-times"
} else {
        taggleMenue.style.left = "-22rem";
        headerIcon.className = "fa fa-bars";
        


    }
})