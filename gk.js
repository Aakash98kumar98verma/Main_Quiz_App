window.onload = function () {
    show(0);
}


let questions3 = [
    { //Q.no.1
        id: 1,
        question: "Q.No.1: What is the capital of France?",
        answer: "Paris",
        options: ["London", "Madrid", "Rome", "Paris"]
    },

    { // Q. no.2
        id: 2,
        question: "Q.No.2: Who wrote the play 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"]
    },

    {// Q. no.3
        id: 3,
        question: "Q.No.3: Which planet is known as the 'Red Planet'?",
        answer: "Mars",
        options: ["Earth", "Mars", "Jupiter", "Venus"]
    },

    {// Q. no.4
        id: 4,
        question: "Q.No.4: What is the currency of Japan?",
        answer: "Yen",
        options: ["Dollar", "Euro", "Pound", "Yen"]
    },
    {// Q. no.5
        id: 5,
        question: "Q.No.5: Who is the first woman to fly solo across the Atlantic Ocean?",
        answer: "Amelia Earhart",
        options: ["Amelia Earhart", "Mae Jemison", "Bessie Coleman", "Sally Ride"]
    },
    {// Q. no.6
        id: 6,
        question: "Q.No.6: In which year did the Titanic sink?",
        answer: "1912",
        options: ["1905", "1912", "1921", "1935"]
    },
    {// Q. no.7
        id: 7,
        question: "Q.No.7: What is the largest planet in our solar system?",
        answer: "Jupiter",
        options: ["Earth", "Mars", "Saturn", "Jupiter"]
    },
    {// Q. no.8
        id: 8,
        question: "Q.No.8: Who is the author of 'To Kill a Mockingbird'?",
        answer: "Harper Lee",
        options: ["J.K. Rowling", "George Orwell", "Harper Lee", "F. Scott Fitzgerald"]
    },
    {// Q. no.9
        id: 9,
        question: "Q.No.9: Which country is known as the Land of the Rising Sun?",
        answer: "Japan",
        options: ["China", "South Korea", "Japan", "Thailand"]
    },
    {// Q. no.10
        id: 10,
        question: "Q.No.10: Who painted the 'Mona Lisa'?",
        answer: "Leonardo da Vinci",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"]
    }
];


// function of quiz to preview  next question
let question_count3 = 0;
let score3 = document.getElementById("score");
if (score3 != null) {
    score3 = parseInt(score3.textContent);
}
// console.log(score);

let questionNo3 = document.getElementById("questionNo"); //getting "questionNo" id in js variable to display question no.

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    // Check answer by the user
    if (user_answer == questions3[question_count3].answer) {
        score3 = score3 + 1;
        sessionStorage.setItem("score", score3);
    }

    if (question_count3 == questions3.length - 1) {
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
    question_count3++;

    // Update the score display in the HTML
    document.getElementById("score").innerHTML = score3;

    // Show the next question
    show(question_count3);

    questionNo3.innerHTML = `${question_count3 + 1}/10`;  //increasing value of question no.
}



function show(count) {
    let question = document.getElementById("questions3");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<div id="question">${questions3[count].question}</div>
    <div class="ans">
                <ul>
                    <li id="optA" class="option">${questions3[count].options[0]}</li>
                    <li id="optB" class="option">${questions3[count].options[1]}</li>
                    <li id="optC" class="option">${questions3[count].options[2]}</li>
                    <li id="optD" class="option">${questions3[count].options[3]}</li>
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