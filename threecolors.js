function tap(color) {
    var water = document.getElementById(color + "water");
    var tapColor = document.getElementById(color + "tap");
    var tapWater = document.getElementById(color + "water");
    var currentState = water.style.animationPlayState;
    var tapCurrentState = tapWater.style.animationPlayState;
    var mixColor = document.getElementById("mixwater");
    var waterflow= document.getElementById(color+"flow");
    if (currentState === "running" || tapCurrentState === "running") {
        tapColor.style.fill = "black";
        water.style.animationPlayState = "paused";
        tapWater.style.animationPlayState = "paused";
   
        
        waterflow.style.backgroundColor="transparent";
        console.log("stop");
        console.log(color);

       
        mixColors();
    } else {
        water.style.animationPlayState = "running";
        tapWater.style.animationPlayState = "running";
        waterflow.style.animationPlayState = "running";
       

        waterflow.style.backgroundColor=color;
        console.log("start");
        console.log(color);

        mixColors();
        
        tapColor.style.fill = color;
    }
}


function mixColors() {
    var redWater = document.getElementById("redwater");
    var greenWater = document.getElementById("greenwater");
    var blueWater = document.getElementById("bluewater");
    var mixColor = document.getElementById("mixwater");

    var redOpen = redWater.style.animationPlayState === "running";
    var greenOpen = greenWater.style.animationPlayState === "running";
    var blueOpen = blueWater.style.animationPlayState === "running";

    var mixedColor;

    if (redOpen && greenOpen && blueOpen) {
        mixedColor = blendColors("#FF0000", "#00FF00", "#0000FF"); // Blend red, green, and blue
    } else if (redOpen && greenOpen) {
        mixedColor = blendColors("#FF0000", "#00FF00"); // Blend red and green
    } else if (redOpen && blueOpen) {
        mixedColor = blendColors("#FF0000", "#0000FF"); // Blend red and blue
    } else if (greenOpen && blueOpen) {
        mixedColor = blendColors("#00FF00", "#0000FF"); // Blend green and blue
    } else if (redOpen) {
        mixedColor = "#FF0000"; // Set to red if only red tap is open
    } else if (greenOpen) {
        mixedColor = "#00FF00"; // Set to green if only green tap is open
    } else if (blueOpen) {
        mixedColor = "#0000FF"; // Set to blue if only blue tap is open
    } else {
        mixedColor = "#808080"; // Default color if no taps are open
    }

    // Apply the mixed color to the mix water tank with a smooth transition
    mixColor.style.transition = "background-color 1s ease-in-out";
    mixColor.style.backgroundColor = mixedColor;
}

// Function to blend colors
function blendColors(...colors) {
    var r = 0, g = 0, b = 0;
    colors.forEach(color => {
        var hex = color.slice(1);
        r += parseInt(hex.substring(0, 2), 16);
        g += parseInt(hex.substring(2, 4), 16);
        b += parseInt(hex.substring(4, 6), 16);
    });
    r = Math.round(r / colors.length);
    g = Math.round(g / colors.length);
    b = Math.round(b / colors.length);
    return "#" + (r << 16 | g << 8 | b).toString(16).padStart(6, "0");
}


