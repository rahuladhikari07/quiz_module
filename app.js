const quiz=[
    {
        question:"Q1:what is the full form of HTML",
        a: "Hello to my Land",
        b:  "Hey Text Markup Language",
        c:  "HyperText Markerp Language",
        d: "HyperText markup language",
        ans: "ans4"
    },
    {
        question:"Q2: what is the full form of CSS",
        a: "Cascading Style Sheet",
        b:  "Cascading Style Sheep",
        c:  "Cartoon Style Sheet",
        d: "Cascading super Sheet",
        ans: "ans1"
    },
    {
        question:"Q3: what is the full form of HTTP",
        a: "Hypertext Transfer Product",
        b:  "Hyper Test Protocol",
        c:  "Cartoon Style Sheet",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question:"Q4: what is the full form of JS",
        a: "JavaScript",
        b:  "JavaSuper",
        c:  "JustScript",
        d: "JordenShoe",
        ans: "ans1"

    }

];
const question= document.querySelector(".question");
const option1= document.querySelector("#option1");
const option2= document.querySelector("#option2");
const option3= document.querySelector("#option3");
const option4= document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers=documnet.querySelectorAll('.answer');
const showScore = document.querySelector("#showScore");

let count=0;
let score=0;

const loadQuestion = () => {
    const questionList =quiz[count];

    question.innerText=questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

function getCheckAnswer (){
    let answer;
    answers.forEach((currAns) => {
        if(currAns.checked){
            answer=currAns.addEventListener;
        }
      
    });
    return answer;
};

function deselectAll(){
    answers.forEach((curAns) =>
    currAns.checked=false);
    };


submit.addEventListener('click',()=>{
const check=getCheckAnswer();
if(check===quiz[count].ans){
    score++;
};
count++;


deselectAll();

if(count<quiz.length)
{
    
    loadQuestion();
}
else{
    showScore.innerHTML =`
    <h3>you scored ${score}/${quiz.length}</h3>
    <button class="btn" onclick="location.reload()">restart</button>
    `;
    showScore.classList.remove('showArea');
}
});
