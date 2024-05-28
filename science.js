window.onload = function () {
    show(0);
}


let questions2 = [
    { //Q.no.1
        id: 1,
        question: "Q.No.1: What is the chemical symbol for oxygen?",
        answer: "O",
        options: ["O2", "Ox", "Oxy", "O"]
    },

    { // Q. no.2
        id: 2,
        question: "Q.No.2: What is the process by which plants make their own food?",
        answer: "Photosynthesis",
        options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"]
    },

    {// Q. no.3
        id: 3,
        question: "Q.No.3: Which planet is known as the 'Red Planet'?",
        answer: "Mars",
        options: ["Earth", "Mars", "Jupiter", "Venus"]
    },

    {// Q. no.4
        id: 4,
        question: "Q.No.4: What is the SI unit of electric current?",
        answer: "Ampere",
        options: ["Watt", "Volt", "Ohm", "Ampere"]
    },
    {// Q. no.5
        id: 5,
        question: "Q.No.5: What is the chemical formula of water?",
        answer: "H2O",
        options: ["CO2", "O2", "H2O", "N2"]
    },
    {// Q. no.6
        id: 6,
        question: "Q.No.6: What is the smallest particle of an element that retains its chemical properties?",
        answer: "Atom",
        options: ["Molecule", "Proton", "Atom", "Electron"]
    },
    {// Q. no.7
        id: 7,
        question: "Q.No.7: Which gas do plants absorb from the atmosphere during photosynthesis?",
        answer: "Carbon Dioxide (CO2)",
        options: ["Oxygen (O2)", "Nitrogen (N2)", "Carbon Monoxide (CO)", "Carbon Dioxide (CO2)"]
    },
    {// Q. no.8
        id: 8,
        question: "Q.No.8: What is the process of conversion of a solid directly into a gas without passing through the liquid phase?",
        answer: "Sublimation",
        options: ["Melting", "Evaporation", "Sublimation", "Condensation"]
    },
    {// Q. no.9
        id: 9,
        question: "Q.No.9: Who is known as the father of modern physics?",
        answer: "Albert Einstein",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"]
    },
    {// Q. no.10
        id: 10,
        question: "Q.No.10: What is the largest organ in the human body?",
        answer: "Skin",
        options: ["Liver", "Brain", "Heart", "Skin"]
    }
];


// function of quiz to preview  next question
let question_count2 = 0;
let score2 = document.getElementById("score");
if (score2 != null) {
    score2 = parseInt(score2.textContent);
}

// let score2 = parseInt(document.getElementById("score").textContent);
// console.log(score);

let questionNo2 = document.getElementById("questionNo"); //getting "questionNo" id in js variable to display question no.

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    // Check answer by the user
    if (user_answer == questions2[question_count2].answer) {
        score2 = score2 + 1;
        sessionStorage.setItem("score", score2);
    }

    if (question_count2 == questions2.length - 1) {
        let timeElement = document.getElementById("time");
        let currentTime = timeElement.innerHTML.split(":");
        let minute = parseInt(currentTime[0]);
        let second = parseInt(currentTime[1]);

        sessionStorage.setItem("time", `${minute}:${second}`);
        location.href = "result.html";
        // sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        return;
    }

    // Increase the question count
    question_count2++;

    // Update the score display in the HTML
    document.getElementById("score").innerHTML = score2;

    // Show the next question
    show(question_count2);

    questionNo2.innerHTML = `${question_count2 + 1}/10`;  //increasing value of question no.
}



function show(count) {
    let question = document.getElementById("questions2");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<div id="question">${questions2[count].question}</div>
    <div class="ans">
                <ul>
                    <li id="optA" class="option">${questions2[count].options[0]}</li>
                    <li id="optB" class="option">${questions2[count].options[1]}</li>
                    <li id="optC" class="option">${questions2[count].options[2]}</li>
                    <li id="optD" class="option">${questions2[count].options[3]}</li>
                </ul>
            </div>    
    `;

    toggleActive()
}
// Enable user interaction to select an answer option
function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }

            option[i].classList.add("active");
        }
    }
}