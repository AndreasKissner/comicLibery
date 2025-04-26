function getheaderTemplate(){
    return`
      <img onclick="soundtrackEvent()"class="logo" src="./assets/img/logo.png" alt="Logo Superman">
            <h1>Superman Comic catalog</h1>
    `
}
function getFooterTemplate(){
    return`
    <h3>2025 Copyright by Warner Bros. Discovery</H3>
    `
}

function getMainTemplate(indexCreator){
    let inventor = catalog.info.inventors[indexCreator];
    return`
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
                                <img onclick="likeEvent()" id="like_img" class="like_icon" src="${inventor.imageheart}" alt="Like Heart">
                                <p id="counter" class="counter_number">${inventor.likes}</p>
                                </div>
                            </div>
                        </div>
                        <h2 id="card-title">${inventor.name}</h2>
                        <p id="card-bio">${inventor.textInfo}</p>
                    </div>
                </div>
                </div>
            </div>
    `
}

