function init() {
    overlayToggle();
    renderHeader();
    // ggf. renderMain(), renderFooter() usw.
  }

function overlayToggle(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle('d_none')
}


function bubbleStopEvent(event){
event.stopPropagation();
}