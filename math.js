window.onload = function () {
    show(0);
}


let questions1 = [
    { //Q.no.1
        id: 1,
        question: "Q.No.1: What is the value of π (pi) to two decimal places?",
        answer: "3.14",
        options: ["3.41", "3.14", "3.22", "3.00"]
    },

    { // Q. no.2
        id: 2,
        question: "Q.No.2: What is the square of 9?",
        answer: "81",
        options: ["18", "27", "81", "64"]
    },

    {// Q. no.3
        id: 3,
        question: "Q.No.3: If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
        answer: "40 square units",
        options: ["13 square units", "26 square units", "40 square units", "64 square units"]
    },

    {// Q. no.4
        id: 4,
        question: "Q.No.4: What is the result of 7 multiplied by 3?",
        answer: "21",
        options: ["10", "14", "21", "28"]
    },
    {// Q. no.5
        id: 5,
        question: "Q.No.5: What is the next prime number after 17?",
        answer: "19",
        options: ["15", "17", "19", "21"]
    },
    {// Q. no.6
        id: 6,
        question: "Q.No.6: If a triangle has a base of 10 units and a height of 6 units, what is its area?",
        answer: "30 square units",
        options: ["15 square units", "25 square units", "30 square units", "50 square units"]
    },
    {// Q. no.7
        id: 7,
        question: "Q.No.7: What is the result of 15 divided by 3?",
        answer: "5",
        options: ["3", "5", "10", "15"]
    },
    {// Q. no.8
        id: 8,
        question: "Q.No.8: What is the square root of 49?",
        answer: "7",
        options: ["5", "7", "9", "11"]
    },
    {// Q. no.9
        id: 9,
        question: "Q.No.9: If x = 4 and y = 7, what is the value of 2x + 3y?",
        answer: "29",
        options: ["16", "23", "29", "33"]
    },
    {// Q. no.10
        id: 10,
        question: "Q.No.10: What is the result of 6 squared (6^2)?",
        answer: "36",
        options: ["18", "24", "36", "42"]
    }
];


// function of quiz to preview  next question
let question_count1 = 0;
let score1 = document.getElementById("score");
if (score1 != null) {
    score1 = parseInt(score1.textContent);
}

// let score1 = parseInt(document.getElementById("score").textContent);
// console.log(score);

let questionNo1 = document.getElementById("questionNo"); //getting "questionNo" id in js variable to display question no.

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    // Check answer by the user
    if (user_answer == questions1[question_count1].answer) {
        score1 = score1 + 1;
        sessionStorage.setItem("score", score1);
    }

    if (question_count1 == questions1.length - 1) {
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
    question_count1++;

    // Update the score display in the HTML
    document.getElementById("score").innerHTML = score1;

    // Show the next question
    show(question_count1);

    questionNo1.innerHTML = `${question_count1 + 1}/10`;  //increasing value of question no.
}



function show(count) {
    let question = document.getElementById("questions1");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<div id="question">${questions1[count].question}</div>
    <div class="ans">
                <ul>
                    <li id="optA" class="option">${questions1[count].options[0]}</li>
                    <li id="optB" class="option">${questions1[count].options[1]}</li>
                    <li id="optC" class="option">${questions1[count].options[2]}</li>
                    <li id="optD" class="option">${questions1[count].options[3]}</li>
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