function renderHeader(){
    let headerContent = document.getElementById("header");
    headerContent.innerHTML = "";
    headerContent.innerHTML += getheaderTemplate();
 }

 function renderMain(){
    let mainContent = document.getElementById("main");
        mainContent.innerHTML = "";

        for (let indexCreator = 0; indexCreator < catalog.info.inventors.length; indexCreator++) {
            mainContent.innerHTML += getMainTemplate(indexCreator);
        }
 }

 function renderFooter(){
let footerContent = document.getElementById("footer");
footerContent.innerHTML = "";


footerContent.innerHTML += getFooterTemplate();
 }