/* // simple change model
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model").src = "/models/teal.glb";
});

// example with showing content
document.getElementById("change-colour").addEventListener("click", function() {
    document.getElementById("model-info").style.display = "block";
});
 */


// example with multiple models
var sofa = ["./models/sofa-style1.glb","./models/sofa-style2.glb", "./models/sofa-style3.glb",]
var counter = 0;
document.getElementById("change-fabric").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("sofa").src = sofa[counter];
});

