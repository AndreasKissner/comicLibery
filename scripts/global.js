function init() {
    overlayToggle();
    renderHeader();
    renderFooter();
    renderMain(); 
    loadCommentsGuest(); 
    renderComics();
    renderComments();
  
  }

function overlayToggle(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle('d_none')
} 


function bubbleStopEvent(event){
event.stopPropagation();
}



function likeEvent(section, index) {
  let item = catalog.info[section][index];
  let likeCounter = document.getElementById(`like_counter-${section}-${index}`);
  let likeHeart = document.getElementById(`like_heart-${section}-${index}`);
  if (item.liked) {
    item.likes--;
    item.liked = false;
    likeHeart.classList.remove('liked_after');
  } else {
    item.likes++;
    item.liked = true;
    likeHeart.classList.add('liked_after');
  }
  likeCounter.textContent = item.likes;
  saveCommentsGuest();
}

function moveComments(key, index) {
  let inputFieldComRef = document.getElementById(`comment_field-${key}-${index}`);
  let inputComField = inputFieldComRef.value.trim();
  let comic = catalog.info[key][index];
  if (!comic) {
      console.error("Comic nicht gefunden!");
      return;
  }
  if (localStorage.getItem(`GastKommentar-${key}-${index}`)) {
      alert("Sie haben schon einen Kommentar als 'Gast' hinterlassen!");
      return;
  }
  checkInputField(inputComField, inputFieldComRef, comic, key, index);
}

// <input type="text" id="commment_field" placeholder="max. 150 Zeichen">
//<button onclick="moveComments" id="send_comment" type="button">Send</button>

function hasGuestComment(comic) {
  for (let i = 0; i < comic.comments.length; i++) {
    if (comic.comments[i].name === "Gast") {
      return true;
    }
  }
  return false;
}

function checkInputField(inputComField, inputFieldComRef, comic, key, index) {
  if (inputComField !== "" && inputComField.length <= 50) {
      if (hasGuestComment(comic)) {
          alert("Sie haben schon einen Kommentar als 'Gast' hinterlassen!");
          return;
      }
      comic.comments.unshift({
          name: "Gast",
          comment: inputComField
      });
      saveCommentsGuest();
      inputFieldComRef.value = "";
      renderComments(comic, key, index);
  } else {
    alert("Bitte Feld ausfüllen und maximal 150 Zeichen verwenden!");
  }
}

function safetyInput(text) {
  return text
      .replace(/&/g, "IronMan")     
      .replace(/</g, "SpiderMan")   
      .replace(/>/g, "HulkSmash")   
      .replace(/"/g, "WonderWoman") 
      .replace(/'/g, "Batman");     
}

