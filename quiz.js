
const questions = [
    {
        question:"Vad kommer att returneras av följande kod för arr = [1, 2, 5, 8, 10] och target = 8 i en linjär sökning?",
        code: `function linearSearch(arr, target) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === target) {
                         return i;
                    }
                }
                return -1;
            }

            linearSearch([1, 2, 5, 8, 10], 8);`,
        answers: [
            {text: "3", correct: true},
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "-1", correct: false},

        ]
    },
    {
        question:"Vad är resultatet av att köra följande kod på en sorterad lista arr = [1, 3, 5, 7, 9] med target = 7 i binär sökning?",
        code: `function binarySearch(arr, target) {
                    let left = 0, right = arr.length - 1;
                    while (left <= right) {
                        let mid = Math.floor((left + right) / 2);
                            if (arr[mid] === target) {
                                return mid;
                            } else if (arr[mid] < target) {
                                 left = mid + 1;
                            } else {
                                 right = mid - 1;
                            }
                        }
                         return -1;
                }

                binarySearch([1, 3, 5, 7, 9], 7);`,
        answers: [
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "1", correct: false},
            {text: "-1", correct: false},

        ]
    },
    {
        question:"Vad gör följande kod i en hash-tabell om vi försöker hämta en nyckel som inte finns?",
        code: `let hashTable = {};
                hashTable['name'] = 'Alice';
                console.log(hashTable['age']);`,
        answers: [
            {text: "Returnerar undefined", correct: true},
            {text: "Returnerar null", correct: false},
            {text: "Skapar ett nytt objekt", correct: false},
            {text: "Får ett felmeddelande", correct: false},

        ]
    },

    {
        question:"Vad kommer att hända om vi kör följande kod på en lista arr = [10, 20, 30, 40, 50] med target = 35 i Interpolation Search?",
        code: ` function interpolationSearch(arr, target) {
                    let low = 0, high = arr.length - 1;
                    while (low <= high && target >= arr[low] && target <= arr[high]) {
                        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
                        if (arr[pos] === target) {
                            return pos;
                        }
                        if (arr[pos] < target) {
                            low = pos + 1;
                        } else {
                            high = pos - 1;
                        }
                    }
                    return -1;
                }

                interpolationSearch([10, 20, 30, 40, 50], 35);`,
        answers: [
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "-1", correct: true},
            {text: "4", correct: false},

        ]
    },

    {
        question:"Vad kommer att returneras av följande kod för en lista arr = [1, 3, 5, 7, 9] och target = 7 i Jump Search?",
        code: ` function jumpSearch(arr, target) {
                    let n = arr.length;
                    let step = Math.floor(Math.sqrt(n));
                    let prev = 0;
    
                    while (arr[Math.min(step, n) - 1] < target) {
                        prev = step;
                        step += Math.floor(Math.sqrt(n));
                            if (prev >= n) return -1;
                    }

                    while (arr[prev] < target) {
                        prev++;
                        if (prev === Math.min(step, n)) return -1;
                    }
                    return arr[prev] === target ? prev : -1;
                }

                jumpSearch([1, 3, 5, 7, 9], 7); `,
        answers: [
            {text: "3", correct: true},
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "-1", correct: false},

        ]
    },
    {
        question:"Vad returneras av följande kod för en lista arr = [5, 10, 15, 20, 25] och target = 15 i en linjär sökning? ",
        code: ` function linearSearch(arr, target) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === target) {
                            return i;
                        }
                    }
                    return -1;
                }

                linearSearch([5, 10, 15, 20, 25], 15);`,
        answers: [
            {text:"0", correct: false},
            {text:"1", correct: false},
            {text:"2", correct: true},
            {text:"-1", correct: false},
        ]

    },
    {
        question:"Vad kommer att returneras av följande kod när arr = [10, 20, 30, 40, 50] och target = 30 vid användning av binär sökning?",
        code: `function binarySearch(arr, target) {
                    let left = 0, right = arr.length - 1;
                    while (left <= right) {
                        let mid = Math.floor((left + right) / 2);
                        if (arr[mid] === target) {
                            return mid;
                        } else if (arr[mid] < target) {
                            left = mid + 1;
                        } else {
                            right = mid - 1;
                        }
                    }
                    return -1;
                }

                binarySearch([10, 20, 30, 40, 50], 30);`,
        answers: [
            {text:" 2", correct: true},
            {text:"3", correct: false},
            {text:"1", correct: false},
            {text:"-1", correct: false},
        ]

    },
    {
        question:"Vad kommer att returneras av följande kod om vi försöker hämta en nyckel från en hash-tabell som inte existerar?",
        code: `let hashTable = {};
               hashTable['name'] = 'Alice';
                console.log(hashTable['age']);`,
        answers: [
            {text:"null", correct: false},
            {text:"undefined", correct: true},
            {text:"Error", correct: false},
            {text:"false", correct: false},
        ]

    },

    {
        question:"Vad händer om vi söker efter ett värde som inte finns i en sorterad lista med Interpolation Search?",
        code: `function interpolationSearch(arr, target) {
                    let low = 0, high = arr.length - 1;
                    while (low <= high && target >= arr[low] && target <= arr[high]) {
                        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
                        if (arr[pos] === target) {
                            return pos;
                        }
                        if (arr[pos] < target) {
                            low = pos + 1;
                        } else {
                            high = pos - 1;
                        }
                    }
                    return -1;
                }

                interpolationSearch([10, 20, 30, 40, 50], 35);`,
                answers: [
                    {text:"-1", correct: true},
                    {text:"underfined", correct: false},
                    {text:"null", correct:false },
                    {text:"-2", correct: false},
                ]
        

    },
    {
        question:"Vad kommer att returneras av följande kod för arr = [1, 3, 5, 7, 9] och target = 5 i Jump Search?",
        code: ` function jumpSearch(arr, target) {
                    let n = arr.length;
                    let step = Math.floor(Math.sqrt(n));
                    let prev = 0;
    
                    while (arr[Math.min(step, n) - 1] < target) {
                        prev = step;
                        step += Math.floor(Math.sqrt(n));
                        if (prev >= n) return -1;
                    }

                    while (arr[prev] < target) {
                        prev++;
                        if (prev === Math.min(step, n)) return -1;
                    }
                    return arr[prev] === target ? prev : -1;
                }

                jumpSearch([1, 3, 5, 7, 9], 5);`,
        answers: [
            {text:" 2", correct: true},
            {text:" 3", correct: false},
            {text:"1", correct:false },
            {text:"-1", correct: false},
        ]

    },
    {
        question: "Vad kommer att hända om vi kör följande kod på en lista med 1000 element med target = 50?",
        code: `let arr = new Array(1000).fill(0).map((_, index) => index + 1);
                console.log(binarySearch(arr, 50));`,
        answers: [
            {text:" Returnerar index 50", correct: false},
            {text:"Returnerar 50", correct: false},
            {text:"Returnerar index 49", correct:true },
            {text:"Returnerar 49", correct: false},
        ]

    },
    {
        question: "Vad kommer att hända om vi kör följande kod för en lista med 5 element och target = 3 med Jump Search?",
        code: `let arr = [1, 3, 5, 7, 9];
                console.log(jumpSearch(arr, 3));`,
        answers: [
            {text:"0", correct: false},
            {text:" 1", correct: true},
            {text:"2", correct:false },
            {text:"-1", correct: false},
        ]

    },
   

];

const codeElement = document.getElementById("code-snippet"); // Kodblock deklareras

const questionElement = document.getElementById("question"); //frågan deklareras
const answerButtons = document.getElementById("answer-btn");//svarsalternativ deklareras
const nextBtn = document.getElementById("next-btn"); //next button deklareras

//skapa fråge-index
let currentQuestionIndex = 0; //startas från 0
let score = 0;

//funktion för starta quizzet
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); //när ovan principer är OK, då kallas denna funktionen
}


function showQuestion(){
    //ta bort tidigare frågor o svar
    resetState();

    let currentQuestion = questions[currentQuestionIndex];// Hämtar den aktuella frågan
    let questionNumber = currentQuestionIndex + 1; //uppdatera frågans nr
    questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

    // Om frågan innehåller en kodsnutt
    if (currentQuestion.code) { // Om det finns kod i frågan
        codeElement.style.display = "block"; // Visa kodblocket
        codeElement.innerText = currentQuestion.code; // Lägg in kod
    } else {
        codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
    }

     //visa svaren
     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        //vid rätt svar
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //eventlisten to select answer
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//välja svar
function selectAnswer(x){
    const selectedBtn = x.target; //valda svarsalternativ
    const isCorrect = selectedBtn.dataset.correct === "true";//kontroll= om svaret är korrekt
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //efter rätt svar vad som sker...
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";//vida "next" button!

}


//score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
}

//visa nästa fråga eller invoke showscore funtion
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//...gå till nästa=klicka på nästa button
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//invoke start quiz!
startQuiz();