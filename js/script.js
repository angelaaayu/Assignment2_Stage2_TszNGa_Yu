/* // simple change model
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/teal.glb";
}); */

/* // example with showing content
document.getElementById("sofa-fabric").addEventListener("click", function() {
    document.getElementById("model-info-sofa-fabric").style.display = "block";
});
 */


// example with multiple models
/* var sofa = ["./models/sofa-style1.glb","./models/sofa-style2.glb", "./models/sofa-style3.glb",]
var counter = 0;
document.getElementById("change-fabric").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("sofa").src = sofa[counter];
}); */

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(index) {
  const slides = document.getElementsByClassName('slide');

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide].style.display = 'block';

  setTimeout(() => {
    showSlide(currentSlide + 1);
  }, 5000); // Change slide every 3 seconds (adjust as needed)
}


const modelViewer = document.querySelector("#sofa");
const select = document.querySelector("#variant-sofa");

select.addEventListener("input", (event) => {
  const selectedOption = event.target.value;

  // Update the model source based on the selected option
  switch (selectedOption) {
    case "style1":
      modelViewer.src = "./models/sofa-style1.glb";
      break;
    case "style2":
      modelViewer.src = "./models/sofa-style2.glb";
      break;
    case "style3":
      modelViewer.src = "./models/sofa-style3.glb";
      break;
    // Add more cases if needed for additional styles
    default:
      modelViewer.src = "./models/sofa-style1.glb"; // Default to style1
  }
});