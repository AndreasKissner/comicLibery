function init() {
    overlayToggle();
    renderHeader();
    renderFooter();
    renderMain(); 
    renderComics();
    // ggf. renderMain(), renderFooter() usw.
  }

function overlayToggle(){
    let overlay = document.getElementById("overlay");
    overlay.classList.toggle('d_none')
}


function bubbleStopEvent(event){
event.stopPropagation();
}

function likeEvent() {
  let likeCounter = document.getElementById("counter");
  let likeButton = document.getElementById("like_img")
  if (book.liked) {
    book.likes--;
    book.liked = false;
    likeButton.classList.remove('liked');
  } else {
    book.likes++;
    book.liked = true;
    likeButton.classList.add('liked');
  }
  likeCounter.textContent = book.likes;
}
