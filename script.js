let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById(".start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
        id: "0",
        question: "Psalm 23 is_______?",
        options: [
            "Important prayer",
            "A prayer for those who seek The Lord",
            "(A Psalm of david.)The Lord is my sheperd",
        ],
        correct: "(A Psalm of david.)The Lord is my sheperd",
    },

    {
        id: "1",
        question: "Revelation 12 talks about_______?",
        options: [
            "Woman and a dragon",
            "Introduction to sermon on the mount",
            "7 churches of asia",
        ],
        correct: "Woman and a dragon",
    },

    {
        id: "2",
        question: "For how many years satan bound________?",
        options: [
            "Hundred years",
            "Thousands of thousands years",
            "Thousands years",
        ],
        correct: "Thousands years",
    },


    {
        id: "3",
        question: "Let Him that hath understanding count the number of the beast: for it is the number of________?",
        options: [
            "Animals",
            "Man",
            "Stars",   
        ],
        correct: "Man",
    },

    {
        id: "4",
        question: "who wrote the book of ecclesiastes_________?",
        options: [
            "Ezekiel",
            "Isaiah",
            "Solomon",
        ],
        correct: "Solomon",
    },

    {
        id: "5",
        question: "if we say that we have no sin we deceive ourselves,script is_________?",
        options: [
        "Galatians 5:1",
        "1-John 1:8",
        "2-Peter 3:1",
        ],
        correct: "1-John 1:8",
    },

    {
        id: "6",
        question: "Now the works of flesh are manifest, script is__________?",
        options: [
        "Galatians 5:19",
        "Romans 2:2",
        "Hebrews 12:1",
        ],
        correct: "Galatians 5:19",
        
    },

    {
        id: "7",
        question: "In the beginning God created__________?",
        options: [
        "Adam and Eve",
        "The heaven and Earth",
        "The light and the darkness",
        ],
        correct: "The light and the darkness",
    },

    {
        id: "8",
        question: "3 childrens of Noah who came out of ark___________?",
        options: [
        "Shem,Ham le Japheth",
        "Ashkenaz,Riphath le Togarmah",
        "Enoch,Irad le Mehujael",
        ],
        correct: "Shem,Ham le Japheth",
    },

    {
        id: "9",
        question: "The name of bilha's son___________?",
        options: [
        "Sarah",
        "Rachel",
        "Dan",
        ],
        correct: "Dan",
    },

    {
        id: "10",
        question: "Who is Moses father in law_________?",
        options: [
        "Jacob",
        "pharaoh",
        "Jethro",
        ], 
        correct: "Jethro",
    },

    {
        id: "11",
        question: "How many plagues were inflicted by God of Isarael on Egypt_________?",
        options: [
        "five",
        "Ten",
        "six",
        ],
        correct: "Ten",
    },

    {
        id: "12",
        question: "What is massah and Meribah mean________?",
        options:[
        "Test or Trial",
        "Obedience and Salvation",
        "Love and Respect",
        ],
        correct: "Test or Trial",
    },

    {
        id: "13",
        question: "God once said to Moses?",
        options:[
        "Take Aaron and his childrens",
        "Run away from Egypt",
        "Kill Pharaoh",
        ],
        correct: "Take Aaron and his childrens",
    },

    {
        id: "14",
        question: "Every animal which dividedth the hoof,and is not clovenfooted, shall be_________?",
        options: [
        "Your offering",
        "Unclean to you",
        "Your food",
        ],
        correct: "Unclean to you",
    },

    {
        id: "15",
        question: "In the begining God once said than man should not eat________?",
        options:[
        "Fruits",
        "Animals that devoured by the beast",
        "Manna",
        ],
        correct: "Animals that devoured by the beast",
    },

    {
        id: "16",
        question: "May The Lord bless you and_________?",
        options:[
        "Go with you",
        "Look after you",
        "Keep you",
        ],
        correct: "Keep you",
    },

    {
        id: "17",
        question: "Two trumpet of__________?",
        options: [
        "Gold",
        "Silver",
        "Myrrh",
        ],
        correct: "Silver",
    },

    {
        id: "18",
        question: "The nation of isralites was walking with moses to the land of_________?",
        options: [
        "Egypt",
        "canaaan",
        "Jericho",
        ],
        correct: "Canaan",
    },

    {
        id: "19",
        question: "You are the childrens of God you Lord,do not________?",
        options: [
        "Fast",
        "Walk-away",
        "Mark your body",
        ],
        correct: "Mark your body",
    },

    {
        id: "20",
        question: "every 7th year you shall make a________?",
        options: [
        "Passover",
        "Release",
        "Burnt-offering",
        ],
        correct: "Release",
    },

    {
        id: "21",
        question: "God once said to Joshua________?",
        options: [
        "Only be thou strong and very corageous",
        "go and seek Moses",
        "Show you offerings",
        ],
        correct: "Only be thou strong and very corageous",
    },

    {
        id: "22",
        question: "Joshua once met the________?",
        options: [
        "Captain of the Lord's host",
        "Angel of God",
        "Amalek",
        ],
        correct: "Captain of the Lord's host",
    },

    {
        id: "23",
        question: "Caleb was the son of_________?",
        options: [
        "Ephraim",
        "Jephunneh",
        "Hermon",
        ],
        correct: "Jephunneh",
    },

    {
        id: "24",
        question: "How many scriptures does the bibble has?",
        options: [
        "Seventhy seven",
        "sixthy six",
        "eighty four",
        ],
        correct: "sixthy six",
    },

    {
        id: "25",
        question: "Nebuchadnezzar was the king of________?",
        options: [
        "Jude",
        "Israel",
        "Babylon",
        ],
        correct: "Babylon",
    },

    {
        id: "26",
        question: "Jesus Christ is the son of________?",
        options: [
        "Marry",
        "God",
        "joseph",
        ],
        correct: "God",
    },

    {
        id: "27",
        question: "Jesus Christ was from thre tribe of________?",
        options: [
        "Dan",
        "Reuben",
        "Jude",
        ],
        correct: "Jude",
    },

    {
        id: "28",
        question: "Jesus Christ once said that:take your cross and_______?",
        options: [
        "Be crucified",
        "Went on",
        "follow me",
        ],
        correct: "follow me",
    },

    {
        id: "29",
        question: "Jesus chris said: I'am the true vine,script is_______?",
        options: [
        "Luke 13:9",
        "Matthew 6:3",
        "John 15:1",
        ],
        correct: "John 15:1",
    },

    {
        id: "30",
        question: "But of that day and hour knoweth no man,no, not the angels of Heaven, but my Father only________?",
        options: [
        "Matthew 24:36",
        "Mark 2:1",
        "Acts 3:5",
        ],
        correct: "Matthew 24:36",
    },

    {
        id: "31",
        question: "Works of flesh manifest, script is________?",
        options: [
        "John 2:8",
        "Galatians 5:19",
        "James 1:5",
        ],
        correct: "Galatians 5:19",
    },

    {
        id: "32",
        question: "In Him was life, and the life was the light of men, script is_________?",
        options: [
        "John 1:4",
        "Matthew 3:7",
        "Hebrews 12:5",
        ],
        correct: "John 1:4",
    },

    {
        id: "33",
        question: "How many deciples did jesus christ had?",
        options: [
        "Twenty two",
        "Twelve",
        "RTwenty four",
        ],
        correct: "Twelve",
    },

    {
        id: "34",
        question: "Jesus Christ appeared to His deciples at the sea of___________?",
        options: [
        "The red sea",
        "Jordan",
        "Tiberias",
        ],
        correct: "Tiberiase",
    },

    {
        id: "35",
        question: "After Jesus Christ went to heaven, then His deciples went to_________?",
        options: [
        "Canaan",
        "Capernaum",
        "Jerusalem",
        ],
        correct: "Jerusalem",
    },

    {
        id: "36",
        question: "And the voice said Saul! Saul!________?",
        options: [
        "Where are you going?",
        "Why persecutest thou me...?",
        "Go back to damscus ",
        ],
        correct: "Why persecutest thou me...?",
    },

    {
        id: "37",
        question: "John the baptist had a raiment of________?",
        options: [
        "Camel's hair",
        "Sheep's hair",
        "Wolve's hair",
        ],
        correct: "Camel's hair",
    },

    {
        id: "38",
        question: "Ahab and Jehoshaphat attacked________?",
        options: [
        "Amalek",
        "Amorates",
        "Syrians",
        ],
        correct: "Syrians",
    },

    {
        id: "39",
        question: "John baptised in river of________?",
        options: [
        "Euphrates",
        "Jordan",
        "The red sea",
        ],
        correct: "Jordan",
    },

    {
        id: "40",
        question: "How many were childrens of Jacob________?",
        options: [
        "Twelve childrens",
        "Twenty childrens",
        "Fifteen childrens",
        ],
        correct: "Twelve childrens",
    },

    {
        id: "41",
        question: "Food of the spirit are_________?",
        options: [
        "Love and joy",
        "Fornication and Drunkedness",
        "Promise and faith",
        ], 
        correct: "Love and joy",
    },

    {
        id: "42",
        question: "Jesus Christ once cursed the tree of________?",
        options: [
        "Palm",
        "Fig",
        "Vine",
        ],
        correct: "Fig",
    },

    {
        id: "43",
        question: "The last letter of the old testament is________?",
        options: [
        "Ezekiel",
        "Nehemiah",
        "Malachi",
        ],
        correct: "Malachi",
    },

    {
        id: "44",
        question: "Works of flesh manifest, script is_______?",
        options: [
        "John 2:8",
        "Galatians 5:19",
        "James 1:5",
        ],
        correct: "Galatians 5:19",
    },

    {
        id: "45",
        question: "The heading of the Psalm 24_______?",
        options: [
        "The Lord is my shepherd",
        "Thaksgivings after the king returned from war",
        "When the arch of covenant was fetched from Obed-Edom",
        ],
        correct: "When the arch of covenant was fetched from Obed-Edom",
    }
];

restart.addEventListener("click",()=>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if (questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = " Your score is " + 
        scoreCount + " From questions " + questionCount;   
    }
    else{
        countOfQuestion.innerHTML = 
        questionCount + 1 + " Of " + quizArray.length + " Questions";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);
const timerDisplay = () =>{
        countdown = setInterval(() =>{
            count--;
            timeLeft.innerHTML = `${count}s`;
            if(count == 0){
                clearInterval(countdown);
                displayNext();

            }
        }, 700); 
};

const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card)=>{
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(()=>Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=>Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");


        countOfQuestion.innerHTML = 1 + " <b>Of</b> " + quizArray.length + " <b>Questions</b>";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("Questions");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        `;
        quizContainer.appendChild(div);
    }
}
function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let option = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else {
        userOption.classList.add("incorrect");

        option.forEach((element) => {
            if(element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;

    });
} 
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", ()=> {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

Window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
    
    
};

