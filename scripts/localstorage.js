function saveCommentsGuest() {
    localStorage.setItem("catalogInfo", JSON.stringify(catalog.info));
  }
  


  function loadCommentsGuest() {
    const savedInfo = localStorage.getItem("catalogInfo");
    if (savedInfo) {
      catalog.info = JSON.parse(savedInfo);
    }
  }
  