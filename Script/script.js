document.addEventListener("DOMContentLoaded", function () {
    const resume = document.getElementById("resume");
    const colorButton = document.getElementById("colorButton");
    let index = 0;


    const gradientColors = [
        ["#FFD1DC", "#FDFD96"], 
        ["#FDFD96", "#FFD1DC"], 
    ];

    colorButton.addEventListener("click", function () {
     
        const gradient = `linear-gradient(45deg, ${gradientColors[index][0]}, ${gradientColors[index][1]})`;
        resume.style.backgroundImage = gradient;

  
        index = (index + 1) % gradientColors.length;
    });
});
