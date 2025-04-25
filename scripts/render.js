function renderHeader(){
    console.log("Header wird gerendert ✅");
    let headerContent = document.getElementById("header");
    headerContent.innerHTML = "";
    headerContent.innerHTML += getheaderTemplate();
 }
