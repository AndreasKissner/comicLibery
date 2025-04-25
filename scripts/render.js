function renderHeader(){
    let headerContent = document.getElementById("header");
    headerContent.innerHTML = "";
    headerContent.innerHTML += getheaderTemplate();
 }

 function renderMain(){
    let mainContent = document.getElementById("main");
        mainContent.innerHTML = "";
        mainContent.innerHTML += getMainTemplate();
 }

 function renderFooter(){
let footerContent = document.getElementById("footer");
footerContent.innerHTML = "";
footerContent.innerHTML += getFooterTemplate();
 }