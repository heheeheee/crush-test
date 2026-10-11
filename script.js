const questions = [
    {
        question: "요즘 그 사람을 얼마나 자주 생각하나요?",
        answers: [
            { text: "거의 생각하지 않는다", love: 0, mind: 0, interest: 0, possibility: 0, action: 0 },
            { text: "가끔 생각난다", love: 5, mind: 5, interest: 3, possibility: 2, action: 2 },
            { text: "하루에 몇 번씩 생각난다", love: 8, mind: 8, interest: 6, possibility: 4, action: 3 },
            { text: "거의 매일 계속 생각난다", love: 10, mind: 10, interest: 8, possibility: 5, action: 2 }
        ]
    },

    {
        question: "그 사람에게 연락이 오면 어떤 기분인가요?",
        answers: [
            { text: "그냥 그렇다", love: 2, mind: 1, interest: 1, possibility: 2, action: 1 },
            { text: "조금 기분이 좋다", love: 5, mind: 4, interest: 4, possibility: 4, action: 3 },
            { text: "기분이 확 좋아진다", love: 8, mind: 7, interest: 7, possibility: 6, action: 5 },
            { text: "하루 종일 기분이 좋을 것 같다", love: 10, mind: 10, interest: 9, possibility: 7, action: 6 }
        ]
    },

    {
        question: "그 사람과 눈이 마주치면 어떻게 되나요?",
        answers: [
            { text: "아무렇지도 않다", love: 1, mind: 1, interest: 1, possibility: 1, action: 5 },
            { text: "조금 신경 쓰인다", love: 4, mind: 4, interest: 4, possibility: 3, action: 4 },
            { text: "괜히 피하게 된다", love: 7, mind: 7, interest: 7, possibility: 5, action: 2 },
            { text: "심장이 뛰고 계속 신경 쓰인다", love: 10, mind: 10, interest: 10, possibility: 6, action: 1 }
        ]
    },

    {
        question: "그 사람이 다른 사람과 친하게 지내면 어떤가요?",
        answers: [
            { text: "아무렇지도 않다", love: 0, mind: 0, interest: 0, possibility: 0, action: 5 },
            { text: "조금 신경 쓰인다", love: 5, mind: 4, interest: 4, possibility: 2, action: 4 },
            { text: "괜히 질투가 난다", love: 8, mind: 8, interest: 7, possibility: 3, action: 3 },
            { text: "상당히 신경 쓰이고 질투가 난다", love: 10, mind: 10, interest: 9, possibility: 4, action: 2 }
        ]
    },

    {
        question: "그 사람에게 잘 보이고 싶다는 생각을 하나요?",
        answers: [
            { text: "별로 없다", love: 1, mind: 1, interest: 1, possibility: 1, action: 2 },
            { text: "가끔 그런 생각을 한다", love: 4, mind: 4, interest: 5, possibility: 3, action: 4 },
            { text: "꽤 자주 한다", love: 7, mind: 7, interest: 8, possibility: 5, action: 6 },
            { text: "항상 신경 쓰인다", love: 10, mind: 10, interest: 10, possibility: 7, action: 7 }
        ]
    },

    {
        question: "좋아하는 사람에게 먼저 말을 걸고 싶을 때 어떻게 하나요?",
        answers: [
            { text: "말 걸고 싶어도 그냥 참는다", love: 6, mind: 7, interest: 6, possibility: 2, action: 0 },
            { text: "고민하다가 결국 못 건다", love: 7, mind: 8, interest: 7, possibility: 3, action: 2 },
            { text: "상황이 좋으면 말을 건다", love: 7, mind: 7, interest: 8, possibility: 7, action: 7 },
            { text: "별로 망설이지 않고 말을 건다", love: 8, mind: 7, interest: 9, possibility: 9, action: 10 }
        ]
    },

    {
        question: "그 사람과 단둘이 있을 기회가 생긴다면?",
        answers: [
            { text: "조금 어색할 것 같다", love: 3, mind: 3, interest: 2, possibility: 3, action: 2 },
            { text: "편하게 이야기할 것 같다", love: 5, mind: 5, interest: 5, possibility: 6, action: 6 },
            { text: "굉장히 설렐 것 같다", love: 8, mind: 8, interest: 8, possibility: 7, action: 5 },
            { text: "그 기회를 꼭 만들고 싶다", love: 10, mind: 10, interest: 10, possibility: 9, action: 10 }
        ]
    },

    {
        question: "그 사람에게 하고 싶은 말이나 행동을 혼자 생각해본 적이 있나요?",
        answers: [
            { text: "별로 생각해본 적 없다", love: 2, mind: 2, interest: 2, possibility: 2, action: 3 },
            { text: "가끔 생각해본다", love: 5, mind: 5, interest: 5, possibility: 4, action: 5 },
            { text: "많이 생각하지만 실제로 하지는 못한다", love: 8, mind: 9, interest: 8, possibility: 3, action: 2 },
            { text: "생각한 것은 조금씩 직접 해보는 편이다", love: 8, mind: 8, interest: 9, possibility: 8, action: 10 }
        ]
    },

    {
        question: "그 사람의 사소한 변화도 알아차리는 편인가요?",
        answers: [
            { text: "거의 모른다", love: 1, mind: 1, interest: 1, possibility: 1, action: 3 },
            { text: "가끔 알아차린다", love: 4, mind: 5, interest: 4, possibility: 3, action: 4 },
            { text: "대부분 알아차린다", love: 7, mind: 8, interest: 8, possibility: 4, action: 5 },
            { text: "작은 변화도 바로 알아차린다", love: 10, mind: 10, interest: 10, possibility: 5, action: 5 }
        ]
    },

    {
        question: "그 사람에게 좋은 일이 생기면 어떤가요?",
        answers: [
            { text: "그냥 그렇다", love: 1, mind: 1, interest: 1, possibility: 1, action: 2 },
            { text: "축하해주고 싶다", love: 4, mind: 5, interest: 4, possibility: 4, action: 5 },
            { text: "나까지 기분이 좋아진다", love: 7, mind: 8, interest: 7, possibility: 6, action: 6 },
            { text: "내 일처럼 기쁘고 직접 축하해주고 싶다", love: 10, mind: 10, interest: 9, possibility: 7, action: 9 }
        ]
    },

    {
        question: "지금 그 사람과의 관계를 어떻게 생각하나요?",
        answers: [
            { text: "아직 특별한 관계는 아니다", love: 3, mind: 3, interest: 2, possibility: 2, action: 3 },
            { text: "조금 가까워지고 있는 것 같다", love: 5, mind: 5, interest: 5, possibility: 6, action: 6 },
            { text: "서로 어느 정도 호감이 있는 것 같다", love: 7, mind: 7, interest: 8, possibility: 8, action: 7 },
            { text: "잘하면 연인으로 발전할 수도 있을 것 같다", love: 9, mind: 9, interest: 9, possibility: 10, action: 9 }
        ]
    }
];


let currentQuestion = 0;

let scores = {
    love: 0,
    mind: 0,
    interest: 0,
    possibility: 0,
    action: 0
};

let selectedAnswer = null;


const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");
const progress = document.getElementById("progress");


totalQuestions.textContent = questions.length;


function startTest() {

    currentQuestion = 0;

    scores = {
        love: 0,
        mind: 0,
        interest: 0,
        possibility: 0,
        action: 0
    };

    selectedAnswer = null;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionNumber.textContent = currentQuestion + 1;

    const progressPercent =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width = progressPercent + "%";

    answersElement.innerHTML = "";

    nextButton.disabled = true;

    selectedAnswer = null;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "결과 보기";
    } else {
        nextButton.textContent = "다음";
    }


    current.answers.forEach((answer) => {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = answer.text;

        button.onclick = function () {

            document.querySelectorAll(".answer-button")
                .forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

            selectedAnswer = answer;

            nextButton.disabled = false;
        };

        answersElement.appendChild(button);
    });
}


function nextQuestion() {

    if (nextButton.disabled || !selectedAnswer) {
        return;
    }


    scores.love += selectedAnswer.love;
    scores.mind += selectedAnswer.mind;
    scores.interest += selectedAnswer.interest;
    scores.possibility += selectedAnswer.possibility;
    scores.action += selectedAnswer.action;


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }
}


function calculateScore(score) {

    return Math.round(
        (score / (questions.length * 10)) * 100
    );
}


function showResult() {

    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");


    const loveScore = calculateScore(scores.love);
    const mindScore = calculateScore(scores.mind);
    const interestScore = calculateScore(scores.interest);
    const possibilityScore = calculateScore(scores.possibility);
    const actionScore = calculateScore(scores.action);


    const totalScore = Math.round(
        (
            loveScore +
            mindScore +
            interestScore +
            possibilityScore
        ) / 4
    );


    document.getElementById("score").textContent = totalScore;

    document.getElementById("love-score").textContent =
        loveScore;

    document.getElementById("mind-score").textContent =
        mindScore;

    document.getElementById("interest-score").textContent =
        interestScore;

    document.getElementById("possibility-score").textContent =
        possibilityScore;


    document.getElementById("love-bar").style.width =
        loveScore + "%";

    document.getElementById("mind-bar").style.width =
        mindScore + "%";

    document.getElementById("interest-bar").style.width =
        interestScore + "%";

    document.getElementById("possibility-bar").style.width =
        possibilityScore + "%";


    let title;
    let description;


    if (totalScore >= 90) {

        title = "💘 이미 마음이 많이 커졌어요";

        description =
            "단순한 호감을 넘어 그 사람의 작은 행동 하나에도 영향을 받을 정도로 마음이 깊어진 상태입니다.";

    } else if (totalScore >= 75) {

        title = "❤️ 꽤 깊은 짝사랑";

        description =
            "그 사람을 자주 생각하고 관심을 가지고 있습니다. 조금씩 관계를 발전시켜 볼 만한 단계입니다.";

    } else if (totalScore >= 60) {

        title = "💗 호감이 점점 커지는 중";

        description =
            "아직 완전히 깊어진 단계는 아니지만 그 사람에게 분명한 관심이 생긴 상태입니다.";

    } else if (totalScore >= 40) {

        title = "💓 은근한 호감";

        description =
            "관심은 있지만 아직 짝사랑이라고 확실하게 말하기에는 조금 애매한 단계입니다.";

    } else {

        title = "🌱 이제 막 시작된 마음";

        description =
            "아직은 가벼운 관심에 가까워 보입니다. 앞으로 어떻게 관계를 만들어 가느냐가 중요합니다.";
    }


    document.getElementById("result-title").textContent =
        title;

    document.getElementById("result-description").textContent =
        description;


    document.getElementById("relationship-analysis").textContent =
        getRelationshipAnalysis(
            possibilityScore,
            interestScore
        );


    document.getElementById("advice").textContent =
        getAdvice(
            possibilityScore,
            interestScore,
            actionScore
        );


    document.getElementById("warning").textContent =
        getWarning(
            loveScore,
            mindScore,
            actionScore
        );
}


function getRelationshipAnalysis(possibility, interest) {

    if (possibility >= 80 && interest >= 70) {

        return "현재 관계에서 충분한 가능성이 보입니다. 상대와 자연스럽게 대화할 기회를 늘리면서 서로에 대해 알아가는 것이 좋습니다.";

    }

    if (possibility >= 60) {

        return "아직 확실한 관계라고 보기는 어렵지만, 조금씩 가까워질 여지가 있습니다. 부담을 주기보다는 자연스럽게 접점을 늘려보세요.";

    }

    if (interest >= 70) {

        return "당신의 마음은 상당히 크지만 현재 관계의 발전 가능성은 아직 뚜렷하지 않습니다. 먼저 상대와 편하게 소통하는 것부터 시작하는 것이 좋습니다.";

    }

    return "현재는 서로의 관계를 조금 더 알아가는 단계로 보입니다. 급하게 결론을 내리기보다는 자연스럽게 관계를 만들어가는 것이 좋습니다.";
}


function getAdvice(possibility, interest, action) {

    if (interest >= 75 && action <= 35) {

        return "당신은 그 사람을 상당히 많이 좋아하지만 마음을 혼자 간직하는 경향이 강합니다. 계속 혼자 생각만 하기보다는 먼저 인사를 하거나 가볍게 말을 거는 것처럼 작은 행동부터 시작해보세요. 꼭 큰 고백을 해야 하는 것은 아닙니다.";

    }

    if (interest >= 75 && action <= 55) {

        return "마음에 비해 행동은 조금 조심스러운 편입니다. 상대에게 부담을 주지 않는 선에서 작은 관심 표현부터 해보세요. 대화를 조금 더 늘리는 것만으로도 충분합니다.";

    }

    if (possibility >= 80 && action >= 70) {

        return "관계를 발전시킬 가능성을 스스로 만들어가는 편입니다. 지금처럼 자연스럽게 대화를 이어가면서 상대의 반응도 함께 살펴보세요.";

    }

    if (possibility >= 60) {

        return "아직은 서두를 필요가 없습니다. 공통 관심사를 찾고 가볍게 대화를 시작하면서 자연스럽게 관계를 만들어가 보세요.";

    }

    return "아직은 마음을 급하게 표현하지 않아도 됩니다. 먼저 편하게 대화할 수 있는 관계를 만드는 것부터 시작해보세요.";
}


function getWarning(love, mind, action) {

    if (love >= 80 && mind >= 80 && action <= 35) {

        return "마음은 굉장히 큰데 행동은 거의 하지 않는 상태입니다. 혼자 상대의 행동을 해석하거나 계속 고민하기보다는, 아주 작은 행동이라도 직접 해보는 것이 좋습니다.";

    }

    if (love >= 80 && mind >= 80) {

        return "마음이 큰 만큼 상대의 행동 하나하나를 너무 깊게 해석하지 않는 것이 좋습니다. 혼자서 결론을 내리기보다는 실제 상대의 행동을 차분하게 바라보세요.";

    }

    if (mind >= 70) {

        return "상대를 너무 자주 생각하다 보면 작은 행동에도 의미를 부여할 수 있습니다. 실제로 상대가 보여주는 행동을 차분하게 보는 것이 중요합니다.";

    }

    return "아직 관계가 정해진 것은 아닙니다. 상대의 마음도 존중하면서 천천히 알아가는 것이 좋습니다.";
}


function restartTest() {

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

}