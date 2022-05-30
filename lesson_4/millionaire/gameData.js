let gameData = {
    questions: [
        {
            id: 1,
            question: "Какое заклинание использовал Гарри, чтобы убить лорда Волан-де-Морта?",
            answers: ["Экспеллиармус", "Экспекто патронум", "Авада Кедавра", "Accio"],
            rightAnswer: "Экспеллиармус"
        },
        {
            id: 2,
            question: "Какое животное на первом собрании Дуэльного клуба Драко Малфой вызвал заклинанием «Serpensortia»?",
            answers: ["лягушка", "Змея", "Дракон", "медведь"],
            rightAnswer: "Змея"
        },
        {
            id: 3,
            question: "Какой патронус принадлежит Луне Лавгуд?",
            answers: ["лань", "кролик", "Собака", "Лошадь"],
            rightAnswer: "кролик"
        },
        {
            id: 4,
            question: "Кто был вратарём Гриффиндора, помешанным на квиддиче, в период с 1987 по 1994 год?",
            answers: ["Кэти Белл", "Оливер Вуд", "Чарли Уизли", "Анджелина Джонсон"],
            rightAnswer: "Оливер Вуд"
        },
        {
            id: 5,
            question: "Как звали домашнего эльфа семьи Блэк?",
            answers: ["Добби", "Винки", "Кричер", "хоккей"],
            rightAnswer: "Кричер"
        }
    ],

    getRightAnswer(questionID) {
        for (let i=0; i < this.questions.length; i++) {
            if (this.questions[i].id == questionID) {
                return this.questions[i].rightAnswer;
            }
        }
    },

    shaffleAnswers(question) {
        sortedAnswers = question.answers.sort(()=>Math.random()-0.5);
        return sortedAnswers;
    },

    compileAnswers(answers) {
        ans = "";
        for(let i = 0; i < answers.length; i++) {
            ans += (i + 1) + ". " + answers[i] + "\n";
        }
        return ans;
    }
}