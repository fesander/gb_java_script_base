let game = {

    rightAnswerCout: 0,

    run() {
        questions = gameData.questions.sort(()=>Math.random()-0.5);
        for (let i = 0; i < questions.length; i++) {
            allAnswers = gameData.shaffleAnswers(questions[i]);
            rightAnswer = gameData.getRightAnswer(questions[i].id);
            userAnswer = parseInt(prompt(questions[i].question + "\n" + gameData.compileAnswers(allAnswers)));
            if(isNaN(userAnswer)) {
                alert("Игра закончена\nВы ответили на " + this.rightAnswerCout + " из " + questions.length + " вопросов")
                return null;
            }
            if(allAnswers[userAnswer - 1] == rightAnswer) {
                this.rightAnswerCout++;
            }
        }
        alert("Игра закончена\nВы ответили на " + this.rightAnswerCout + " из " + questions.length + " вопросов");
    }
}