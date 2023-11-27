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

// Function to update the model source based on the selected option
function updateModelSource(furnitureType, selectedOption) {
    const modelViewer = document.querySelector(`#${furnitureType}`);
    const select = document.querySelector(`#variant-${furnitureType}`);
  
    switch (selectedOption) {
      case "style1":
        modelViewer.src = `./models/${furnitureType}-style1.glb`;
        break;
      case "style2":
        modelViewer.src = `./models/${furnitureType}-style2.glb`;
        break;
      case "style3":
        modelViewer.src = `./models/${furnitureType}-style3.glb`;
        break;
      // Add more cases if needed for additional styles
      default:
        modelViewer.src = `./models/${furnitureType}-style1.glb`; // Default to style1
    }
}
  
// Usage example for the sofa
const sofaSelect = document.querySelector("#variant-sofa");

sofaSelect.addEventListener("input", (event) => {
const selectedOption = event.target.value;
updateModelSource("sofa", selectedOption);
});

// Usage example for the cabinet
const cabinetSelect = document.querySelector("#variant-cabinet");

cabinetSelect.addEventListener("input", (event) => {
const selectedOption = event.target.value;
updateModelSource("cabinet", selectedOption);

});

const CoffeeTableSelect = document.querySelector("#variant-coffeetable");

CoffeeTableSelect.addEventListener("input", (event) => {
const selectedOption = event.target.value;
updateModelSource("coffeetable", selectedOption);
});


(() => {
    const modelViewer = document.querySelector('#sofa');
    const orbitCycle = [
      '69deg 85.51deg 4.27m',
      '300.87deg 75.79deg 2m',
      modelViewer.cameraOrbit
    ];
  
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 5000);
})();


(() => {
    const modelViewer = document.querySelector('#cabinet');
    const orbitCycle = [
      '190deg 50deg 3m',
      '100.87deg 75.79deg 3m',
      modelViewer.cameraOrbit
    ];
  
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 5000);
})();

(() => {
    const modelViewer = document.querySelector('#coffeetable');
    const orbitCycle = [
      '190deg 50deg 3m',
      modelViewer.cameraOrbit
    ];
  
    setInterval(() => {
      const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
      modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 5000);
})();
