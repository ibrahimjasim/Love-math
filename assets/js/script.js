document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});


function runGame(gameType) {

    let num1 = math.floor(math.random()* 25 + 1)
    let num2 = math.floor(math.random() * 25 + 1);
    
    if(gameType==="addition"){
        displayAdditionQuestion(num1, num2)
    }else {
        alart=("unnkown game type: ${gameType}");
        throw "unnkown game type: ${gameType}.Aborting!";
    }
}



function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incremntScore() {


}

function incremntWrongAnswer() {


}

function displayAdditionQuestion(operand1, operand2) {

   document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("oprator").textContent = "+"

}

function displaySubtractQustion() {


}

function displayMultiplyQuestion() {

}

