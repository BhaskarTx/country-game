var serverURL = "https://restcountries.com/v2/all?fields=name,population,area,flag";
var leftName = document.querySelector("#leftTitle");
var leftPop = document.querySelector("#Lpopulation");
var rightName = document.querySelector("#rightTitle");
var rightPop = document.querySelector("#Rpopulation");
var topText = document.querySelector(".top");
var scoreText = document.querySelector(".scoreVal");

var resultVal = document.querySelector("#stat")
var resultText = document.querySelector("#resultt")
 
let score = 0;
scoreText.textContent = score;
// const rightName = (rightt)=> {document.querySelector("#rightTitle").textContent = `${rightt}`};
var play = document.querySelector("#play");
var higherBtn = document.querySelector("#higher")
var lowerBtn = document.querySelector("#lower")
var nextBtn = document.querySelector("#next")

var arrayOfCountries;

function randomSelect() {
    return Math.floor(Math.random() * arrayOfCountries.length);
}
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });
var rndm;
var rndm2;
var popu1;
var popu2;

function loadd() {
    // nextBtn.classList.add("hide")
    play.classList.add("hide");
    rightPop.classList.add("hide");
    higherBtn.classList.remove("hide")
    lowerBtn.classList.remove("hide")
    topText.classList.remove("hide")
    rndm = randomSelect();
    rndm2 = randomSelect();
    leftName.textContent = arrayOfCountries[rndm].name;
    rightName.textContent = arrayOfCountries[rndm2].name;
    // console.log(rndm)
    popu1 = Math.ceil(arrayOfCountries[rndm].population / 100) * 100;
    leftPop.textContent = popu1.toLocaleString('en-US');
    popu2 = Math.ceil(arrayOfCountries[rndm2].population / 100) * 100;
    rightPop.textContent = popu2.toLocaleString('en-US');

}

function highh() {
    // resultText.textContent = "Your answer is";
    resultText.classList.remove("hide")
    nextBtn.classList.remove("hide")
    resultVal.classList.remove("hide")
    if (popu2 > popu1) {
        score++;
        scoreText.textContent = score;
        resultVal.textContent = "CORRECT"
        resultVal.classList.remove("wrong")
    } else {
        score--;
        scoreText.textContent = score;
        resultVal.textContent = "WRONG"
        resultVal.classList.add("wrong")
    }
    rightPop.classList.remove("hide")
    higherBtn.classList.add("hide")
    lowerBtn.classList.add("hide")
    
    
}

function lowerr() {
    // resultText.textContent = "Your answer is";
    resultText.classList.remove("hide")
    nextBtn.classList.remove("hide")
    resultVal.classList.remove("hide")
    if (popu2 < popu1) {
        score++;
        scoreText.textContent = score;
        resultVal.textContent = "CORRECT"
        resultVal.classList.remove("wrong")
    } else {
        score--;
        scoreText.textContent = score;
        resultVal.textContent = "WRONG"
        resultVal.classList.add("wrong")
    }
    rightPop.classList.remove("hide")
    higher.classList.add("hide")
    lowerBtn.classList.add("hide")
}

function nextt() {
    resultText.classList.add("hide");
    resultVal.textContent = "";
    // resultText.textContent = "";
    higherBtn.classList.remove("hide")
    lowerBtn.classList.remove("hide")
    nextBtn.classList.add("hide")
    rightPop.classList.add("hide")
    
    rndm = rndm2;
    leftName.textContent = arrayOfCountries[rndm].name;
    popu1 = popu2;
    leftPop.textContent = popu1.toLocaleString('en-US');
    rndm2 = randomSelect();
    rightName.textContent = arrayOfCountries[rndm2].name;
    popu2 = Math.ceil(arrayOfCountries[rndm2].population / 100) * 100;
    console.log(rndm2)
    rightPop.textContent = popu2.toLocaleString('en-US');

}

play.addEventListener("click", loadd);
higherBtn.addEventListener("click", highh);
lowerBtn.addEventListener("click", lowerr);
nextBtn.addEventListener("click", nextt)


fetch(serverURL).then(response => response.json())
    .then((data) => {
        // console.log(response);
        // console.log(data);
        arrayOfCountries = data;
        console.log(arrayOfCountries[0]);
    });