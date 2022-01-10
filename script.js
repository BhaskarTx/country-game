var serverURL = "https://restcountries.com/v2/all?fields=name,population,area,flag";
var leftName = document.querySelector("#leftTitle");
var leftPop = document.querySelector("#Lpopulation");
var rightName = document.querySelector("#rightTitle");
var rightPop = document.querySelector("#Rpopulation");
var topText = document.querySelector(".top");
var scoreText = document.querySelector(".scoreVal");

var resultVal = document.querySelector("#stat")
 
let score = 0;
scoreText.textContent = score;
// const rightName = (rightt)=> {document.querySelector("#rightTitle").textContent = `${rightt}`};
var play = document.querySelector("#play");
var higherBtn = document.querySelector("#higher")
var lowerBtn = document.querySelector("#lower")
var nextBtn = document.querySelector("#next")
// var serverURL2 = "https://restcountries.com/v3.1/all";
//  arrayOfCountries = (data) => {
//     if (!data) return;

//     console.log(data);
//     //using object destructuring
//     const { results } = data;
//     const [profile] = results;

//     const { name } = profile;
//     displayUserName(name);

//     const { picture } = profile;
//     displayUserPhoto(picture);
// }; 

// const arrayOfCountries = ({ flag, name, population, area }) => {
//     document.querySelector(
//       "#leftTitle"
//     ).textContent = `${flag} ${name} ${population} ${area}`;
//   };
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
    nextBtn.classList.add("hide")
    play.classList.add("hide");
    rightPop.classList.add("hide");
    higherBtn.classList.remove("hide")
    lowerBtn.classList.remove("hide")
    topText.classList.remove("hide")
    nextBtn.classList.remove("hide")
    rndm = randomSelect();
    rndm2 = randomSelect();
    leftName.textContent = arrayOfCountries[rndm].name;
    rightName.textContent = arrayOfCountries[rndm2].name;
    // console.log(arrayOfCountries[rndm])
    // console.log(rndm)
    // console.log(rndm2)
    popu1 = Math.ceil(arrayOfCountries[rndm].population / 100) * 100;
    leftPop.textContent = popu1.toLocaleString('en-US');
    popu2 = Math.ceil(arrayOfCountries[rndm2].population / 100) * 100;
    rightPop.textContent = popu2.toLocaleString('en-US');
    // console.log(pop1.toLocaleString('en-US'));

}

function highh() {
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
    resultVal.textContent = "";
    higherBtn.classList.remove("hide")
    lowerBtn.classList.remove("hide")

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
    // rightPop.classList.add("hide")

}

play.addEventListener("click", loadd);
// scoreText.textContent = popu1;
higherBtn.addEventListener("click", highh);
lowerBtn.addEventListener("click", lowerr);
nextBtn.addEventListener("click", nextt)
// higherBtn.addEventListener("click", function highh() {
//     score++;
//     randomSelect();
//     if (pop1<pop2){
//         scoreText.textContent = score;
//         outputBtn.textContent = "correct"
//     }
//     else{
//         outputBtn.textContent = "wrong"
//     }
//     console.log(score)

// })



fetch(serverURL).then(response => response.json())
    .then((data) => {
        // console.log(response);
        // console.log(data);
        arrayOfCountries = data;
        console.log(arrayOfCountries[0]);
    });


// function nextTitles() {
//     // https://restcountries.com/v2/all?fields=name

// }

// nextBtn.addEventListener("click", nextTitles)