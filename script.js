function insertText(text) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML += `<p>${text}</p>`;
  }
  
  function insertImage(imageUrl) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML += `<img src="${imageUrl}" alt="Image">`;
  }
  
  function insertVideo(videoUrl) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML += `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
  }