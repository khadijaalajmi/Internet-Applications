function showAlert() {
    alert("Added to cart successfully ✔️");
}

/////////////////
function showPopup(imageSrc, description, price) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
  
    const popupContent = document.createElement('div');
    popupContent.classList.add('popuptext');
    popupContent.textContent = description + " - " + price;
  
    const image = document.createElement('img');
    image.src = imageSrc;
  
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('popup-close');
    closeBtn.textContent = 'Close';
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  
    popupContent.appendChild(image);
    popupContent.appendChild(closeBtn);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  
    popupContent.classList.add('show');
  }
  
  // mouse
  document.addEventListener('mousemove', function(e) {
    var cursorBlue = document.querySelector('.cursor-circle-blue');
    var cursorPink = document.querySelector('.cursor-circle-pink');
    var offsetX = 2; // Adjust the offset as needed
    var offsetY = 3; // Adjust the offset as needed
    var delay = 100; // Adjust the delay in milliseconds as needed
  
    setTimeout(function() {
        cursorBlue.style.left = (e.pageX - offsetX) + 'px';
        cursorBlue.style.top = (e.pageY - offsetY) + 'px';
        cursorPink.style.left = (e.pageX + offsetX) + 'px';
        cursorPink.style.top = (e.pageY + offsetY) + 'px';
    }, delay);
  });
  

  
  