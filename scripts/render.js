function renderDialog(message) {
  let dialog = document.getElementById("dialog");
  dialog.innerHTML = ""; // Erst leeren
  dialog.innerHTML += getDialogTemplate(message); // Neues Template einfügen
  dialog.classList.remove('d_none'); // Sichtbar machen
  
}


function renderHeader() {
  let headerContent = document.getElementById("header");
  headerContent.innerHTML = "";
  headerContent.innerHTML += getheaderTemplate();
}

function renderMain() {
  let mainContent = document.getElementById("main");
  mainContent.innerHTML = "";
  for (let indexCreator = 0; indexCreator < catalog.info.inventors.length; indexCreator++) {
    mainContent.innerHTML += getMainTemplate(indexCreator);
  }
}

function renderComics() {
  let mainComicCards = document.getElementById("comic_cards");
  mainComicCards.innerHTML = "";
  let info = catalog.info;
  let keys = Object.keys(info); // macht ein Array der Schlüssel: ["inventors", "1930s", "1940s", ...]
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (Array.isArray(info[key]) && key.endsWith("0s")) {
      let comics = info[key];
      for (let j = 0; j < comics.length; j++) {
        mainComicCards.innerHTML += getComicTemplate(comics[j], key, j);
        renderComments(comics[j], key, j);
      }
    }
  }
}



function renderComments(comic, key, index) {
  let output = document.getElementById(`comment-list-${key}-${index}`);
  if (!output) return;

  output.innerHTML = ""; // Erst leeren

  for (let i = 0; i < comic.comments.length; i++) {
    output.innerHTML += `<li><strong>${comic.comments[i].name}:</strong> ${comic.comments[i].comment}</li>`;
  }
}

function renderFooter() {
  let footerContent = document.getElementById("footer");
  footerContent.innerHTML = "";
  footerContent.innerHTML += getFooterTemplate();
}

