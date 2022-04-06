document.getElementById("velg").addEventListener("click", function () {
    var print = document.getElementById("mySelect");

    if (print.options[print.selectedIndex].text == "Her er det flere bilder") {
        document.getElementById("min_valg").innerHTML = "Du trenger å velge en av dem :)"
    } else {
        document.getElementById("min_valg").innerHTML = 
        print.options[print.selectedIndex].text;
        minFarge = print.options[print.selectedIndex].text;
        console.log(minFarge);
        document.body.style.background = minFarge;
    }

    
});

document.getElementById("endre").addEventListener("click", function () {
    var print = document.getElementById("mySelect");
    var temp = document.getElementById("endreText").value
    console.log(temp);
    document.body.style.background = temp;
    print.options[print.selectedIndex].text = temp;
    print.options[print.selectedIndex].style.backgroundColor = temp;
    
})
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F",];
const generateBtn = document.getElementById("generate");
const barContainer = document.getElementById("barContainer");



function randomColor() {
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexValues.length);
    hash += hexValues[random];
  }

  titleChangeColor(hash);

  const liEl = document.createElement("li");
  liEl.textContent = hash;
  liEl.style.background = hash;
  liEl.style.margin = "10px 0";
   barContainer.appendChild(liEl);
  barContainer.insertBefore(liEl, barContainer.firstChild);
}

function titleChangeColor(color) {
  const title = document.querySelector("h1");
  title.style.color = color;
}

generateBtn.addEventListener("click", randomColor);
generateBtn.addEventListener("click", randomColor);


document.getElementById("Random").addEventListener("click", function () {
  
    
   

})