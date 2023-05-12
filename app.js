// Load the font
var font = new FontFace("TroviDialect", "url(TroviDialect-Regular.ttf)", {
    
  });
  
  font.load().then(function() {
    // Font has loaded, add the loaded class to the p element
    var p = document.querySelector("p");
    p.classList.add("loaded");
  }).catch(function() {
    // Font failed to load
    console.log("Error: DejaVuMono font could not be loaded.");
  });