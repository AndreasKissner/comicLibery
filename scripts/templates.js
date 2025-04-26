function getheaderTemplate() {
  return `
      <img onclick="soundtrackEvent()"class="logo" src="./assets/img/logo.png" alt="Logo Superman">
            <h1>Superman Comic catalog</h1>
    `
}
function getFooterTemplate() {
  return `
    <h3>2025 Copyright by Warner Bros. Discovery</H3>
    `
}

function getMainTemplate(indexCreator) {
  let inventor = catalog.info.inventors[indexCreator];
  return `
       <div id="cards_inventors" class="cards_inventors">
                <div class="card" id="card_of_2">
                    <div class="img_big_box" id="img-container-two">
                        <div class="info" id="info-logo">
                            <img class="img_inv" id="logo-img" src="${inventor.logo}" alt="Logo">
                        </div>
                       <img class="img_person" id="creator-img" src="${inventor.image}" alt="${inventor.name}">
                    </div>
                    <div class="card-box" id="card-box-joe">
                        <div class="card-properties" id="card-properties-two">
                            <div class="card-badge" id="badge-name">${inventor.miniName}</div>
                            <div class="card-badge" id="badge-role">${inventor.role}</div>
                            <div class="card-likes" id="card-likes">
                                <div class="counter_heart">
                                <img  onclick="likeEvent()" id="like_img" class="like_icon" src="${inventor.imageheart}" alt="Like Heart">
                                <p id="counter" class="counter_number">${inventor.likes}</p>
                                </div>
                            </div>
                        </div>
                        <h2 id="card-title">${inventor.name}</h2>
                        <p id="card-bio" class="text_info">${inventor.textInfo}</p>
                    </div>
                    <img src="assets/img/shadowlogo.png" class="superman-symbol">

                </div>
                </div>
            </div>
            
      
          
    `
}

function getComicTemplate(comics, key, index) {
  return `
     
      <div class="comic-card">
            <img src="${comics.image}" alt="${comics.title}" class="comic-image" />
            
            <div class="comic-content">
              <h2 class="comic-title">${comics.title}</h2>
              <div class="like_box">
              <p class="comic-year">Jahr: ${comics.year}</p>
              <div class="year_like_box">
             
             <img 
               id="like_heart-${key}-${index}" 
               onclick="likeEvent('${key}', ${index})" 
               src="${comics.heartLike}" 
               alt="Like Heart" 
               class="like-heart ${comics.liked ? 'liked' : ''}" 
               />
              <p class="likes">Likes</p>
             <span 
              id="like_counter-${key}-${index}" 
              class="likes-count">${comics.likes}</span>

              </div>
            </div>
              <p class="comic-description">${comics.description}</p>
              <p class="comic-creators">Von: ${comics.creators}</p>
              <div class="comic-comments">
                <h3>Kommentare:</h3>
                
                <div class="comment-list">
                  <ul>
                  ${comics.comments.map(comment => `
                    <li><strong>${comment.name}:</strong> ${comment.comment}</li>
                  `).join("")}
                  </ul>
                </div>
                <label for="comment_field">Ihr Kommentar</label>
                <input type="text" id="commment_field" placeholder="max. 150 Zeichen">
                <button id="send_comment" type="button">Send</button>
              </div>
              
              
            </div>
         
          </div>
        
    `
}