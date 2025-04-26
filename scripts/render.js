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


       

 function renderComics(){
  let mainComicCards = document.getElementById("comic_cards");
  mainComicCards.innerHTML = "";
  let info = catalog.info;
  for (let key in info) {
    if (Array.isArray(info[key]) && key.endsWith("0s")) { 
      // Nur die Arrays der Jahrzehnte bearbeiten von 30 bis 50s
      let comics = info[key];
      for (let i = 0; i < comics.length; i++) {
        mainComicCards.innerHTML += getComicTemplate(comics[i]);
      }
    }
  }
}

 

 function renderFooter(){
let footerContent = document.getElementById("footer");
footerContent.innerHTML = "";


footerContent.innerHTML += getFooterTemplate();
 }