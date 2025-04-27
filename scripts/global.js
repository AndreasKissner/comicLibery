function init() {
    overlayToggle();
    renderHeader();
    renderFooter();
    renderMain(); 
    renderComics();
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
}

function moveComments(){
let inputFieldComRef = document.getElementById("comment_field");
inputComField =inputFieldComRef.ariaValueMax;
}
// <input type="text" id="commment_field" placeholder="max. 150 Zeichen">
//<button onclick="moveComments" id="send_comment" type="button">Send</button>