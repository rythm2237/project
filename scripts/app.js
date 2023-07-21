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

const contextMenu = document.getElementById("context-menu")

function contextHandler(event){
    event.preventDefault()
    if (contextMenu.style.display === 'none'){
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
        contextMenu.style.display = "block"
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
}

function contextHiden(){
    contextMenu.style.display = "none"
}
function contextHidenByEscape(event){
 
    if (event.keyCode === 27){
        contextMenu.style.display = "none"
        
    }
}

document.body.addEventListener("contextmenu", contextHandler)
document.body.addEventListener("click", contextHiden)
document.body.addEventListener("keydown", contextHidenByEscape)
