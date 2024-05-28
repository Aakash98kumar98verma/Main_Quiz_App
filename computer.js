window.onload = function () {
    // When the window is loaded, show the first question
    show(0);
}

// structured questions and answer in array of obj.
let questions = [
    { //Q.no.1
        id: 1,
        question: "Q.No.1: What is the full form HTML ?",
        answer: "Hyper Text Markup Language",
        options: ["Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language",
            "Hyper Text Markup Language",
            "Hyper Tool Multi-Language"
        ]
    },

    { // Q. no.2
        id: 2,
        question: "Q.No.2: Which programming language is often used for developing Android applications?",
        answer: "Java",
        options: ["JavaScript",
            "Python",
            "Ruby",
            "Java"
        ]
    },

    {// Q. no.3
        id: 3,
        question: "Q.No.3: What does CPU stand for in the context of computer hardware?",
        answer: "Central Processing Unit",
        options: ["Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Control Processing Unit"
        ]
    },

    {// Q. no.4
        id: 4,
        question: "Q.No.4: Which data structure follows the Last-In-First-Out (LIFO) principle?",
        answer: "Stack",
        options: ["Queue",
            "Stack",
            "Linked List",
            "Array"
        ]
    },
    {// Q. no.5
        id: 5,
        question: "Q.No.5:  Which of the following is a relational database management system (RDBMS)?",
        answer: "PostgreSQL",
        options: ["MongoDB",
            "SQL",
            "Cassandra",
            "PostgreSQL"
        ]
    },
    {// Q. no.6
        id: 6,
        question: "Q.No.6:  Who is the father of Computers?",
        answer: "Charles Babbage",
        options: ["James Gosling",
            "Charles Babbage",
            "Dennis Ritchie",
            "Bjarne Stroustrup"
        ]
    },
    {// Q. no.7
        id: 7,
        question: "Q.No.7:  Which of the following computer language is written in binary codes only?",
        answer: "machine language",
        options: ["machine language",
            "JAVA",
            "C#",
            "pascal"
        ]
    },
    {// Q. no.8
        id: 8,
        question: "Q.No.8:  Which of the following is the smallest unit of data in a computer?",
        answer: "Bit",
        options: ["KB",
            "Bit",
            "Byte",
            "MB"
        ]
    },
    {// Q. no.9
        id: 9,
        question: "Q.No.9:  Which unit is responsible for converting the data from the user into a computer understandable format?",
        answer: "Input Unit",
        options: ["Output Unit",
            "Input Unit",
            "Memory Unit",
            "Arithmetic & Logic Unit"
        ]
    },
    {// Q. no.10
        id: 10,
        question: "Q.No.10:  Which of the following can access the server?",
        answer: "Web Client",
        options: ["Web Server",
            "User",
            "Web Browser",
            "Web Client"
        ]
    }
];


// function of quiz to preview  next question
let question_count = 0;
let score = document.getElementById("score");
if (score != null) {
    score = parseInt(score.textContent);
}
console.log(score);

let questionNo = document.getElementById("questionNo"); //getting "questionNo" id in js variable to display question no.

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    // Check answer by the user
    if (user_answer == questions[question_count].answer) {
        score = score + 1;
        sessionStorage.setItem("score", score);
    }

    if (question_count == questions.length - 1) {
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
    question_count++;

    // Update the score display in the HTML
    document.getElementById("score").innerHTML = score;

    // Show the next question
    show(question_count);

    questionNo.innerHTML = `${question_count + 1}/10`;  //increasing value of question no.
}



function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<div id="question">${questions[count].question}</div>
    <div class="ans">
                <ul>
                    <li id="optA" class="option">${questions[count].options[0]}</li>
                    <li id="optB" class="option">${questions[count].options[1]}</li>
                    <li id="optC" class="option">${questions[count].options[2]}</li>
                    <li id="optD" class="option">${questions[count].options[3]}</li>
                </ul>
            </div>    
    `;

    toggleActive()
}

// Enable user interaction to select  answer option
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