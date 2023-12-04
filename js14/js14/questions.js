document.getElementById('myButton').addEventListener('click', function() {


// Программа 1: Выбор темы теста
function chooseRandomTopic() {
    const topics = [
        "Космонавтика",
        "Информатика",
        "Программирование на JS"
    ];

    const randomIndex = Math.floor(Math.random() * topics.length);
    return topics[randomIndex];
};

// Программа 2: Тестирование
function runTest(topic) {

    // Здесь вы можете добавить вопросы и ответы для каждой темы
    const questions = {
        "Космонавтика": [
            "Кто был первым человеком в космосе?",
            "В каком году первый человек полетел в космос?",
            "Какое животное отправили в космос первым?"
        ],
        "Информатика": [
            "Что такое алгоритм?",
            "Что такое очереди?",
            "Что такое что такое стек?"
        ],
        "Программирование на JS": [
            "Что такое DOM?",
            "Есть ли логика в JS?",
            "Сколько будет 1 + 1"
        ]
    };

    const selectedQuestions = questions[topic];
    if (!selectedQuestions) {
        console.log("Тема не найдена");
        return;
    }

    console.log(`Тема теста: ${topic}`);
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        const question = selectedQuestions[randomIndex];
        console.log(`Вопрос ${i + 1}: ${question}`);
    }
}

let selectedTopic = chooseRandomTopic();
runTest(selectedTopic);
});

