function changeColor() {
    var body = document.querySelector("body");
    var currentColor = body.style.backgroundColor;
  
    var colors = ["#ffcc8e", "#a1dfff", "#f5a9b8", "#c3e6cb", "#ffef96", "#b4aee8", "#f4d2c9", "#9ed6af", "#ffd9a6", "#c8bfe7"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    var newColor = colors[randomIndex];
  
    while (newColor === currentColor) {
      randomIndex = Math.floor(Math.random() * colors.length);
      newColor = colors[randomIndex];
    }
  
    body.style.backgroundColor = newColor;
  }
  