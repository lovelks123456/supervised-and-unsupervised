const quizQuestions = [
    {
        question: "Which of the following best describes the main difference between supervised and unsupervised learning?",
        opt1: "Supervised learning is used for discovering hidden structures in data, while unsupervised learning is used for predicting continuous outcomes based on input features.",
        opt2: "Supervised learning uses labeled data to train models to make predictions or classify data into predefined categories, while unsupervised learning uses unlabeled data to identify hidden patterns or groupings without predefined labels.",
        opt3: "Supervised learning involves clustering data into groups, while unsupervised learning involves predicting outcomes based on existing data.",
        opt4: "None of the above",
        correct: "opt2",
    },
    {
        question: "Gmail scans your incoming emails and categorizes them as personal, work, or promotional based on content and context. What learning method is used?",
        opt1: "Regression",
        opt2: "Classification",
        opt3: "Clustering",
        opt4: "Sequence Learning",
        correct: "opt2",
    },
    {
        question: "Assume your father goes to a bank to apply for a loan. The bank uses a sophisticated system to evaluate loan applications and decide whether to approve or deny the loan. This system considers various factors such as credit score, income, and existing debts to make its decision. What type of learning method is the banks system primarily using to determine whether to grant the loan?",
        opt1: "Regression",
        opt2: "Clustering",
        opt3: "Classification",
        opt4: "All of above",
        correct: "opt3",
    },
    {
        question: "A city is using a system to monitor traffic congestion by analyzing live traffic camera feeds and sensors placed on major roads. The system categorizes traffic levels as High, Medium or Low. What type of learning method is used for this categorization?",
        opt1: "Supervised Learning",
        opt2: "Unsupervised Learning",
        opt3: "Sequence Learning",
        opt4: "None of above",
        correct: "opt1",
    },
    {
        question: "What is sequential learning?",
        opt1: "Learning where the computer works with a single data point",
        opt2: "Learning where the computer makes decisions based on past actions in a sequence",
        opt3: "Learning where the computer groups data randomly",
        opt4: "Learning where the computer solves one problem repeatedly",
        correct: "opt2",
    },
    {
        question: "A music app automatically creates playlists for users based on their listening history and adjusts recommendations over time based on what they listen to next. What kind of learning is the app using?",
        opt1: "Supervised learning",
        opt2: "Unsupervised learning",
        opt3: "Sequential learning",
        opt4: "None",
        correct: "opt3",
    },
    {
        question: "An online store wants to automatically sort products into categories based on their descriptions, without any labels telling the computer what category each product belongs to. What type of machine learning should they use?",
        opt1: "Supervised learning",
        opt2: "Unsupervised learning",
        opt3: "Sequential learning",
        opt4: "Reinforcement learning",
        correct: "opt2",
    },
    {
        question: "What is k-means clustering used for?",
        opt1: "To classify data into labeled categories",
        opt2: "To divide data into groups based on similarity without using labels",
        opt3: "To predict future data points",
        opt4: "To sort data alphabetically",
        correct: "opt2",
    },
    {
        question: "Which of the following is true about k-means clustering?",
        opt1: "It only works with labeled data",
        opt2: "It requires the number of clusters (k) to be specified in advance",
        opt3: "It finds overlapping clusters in the data",
        opt4: "It always finds the exact same clusters every time it runs",
        correct: "opt2",
    },
    {
        question: "A hospital uses data from past patients to group them into different risk categories based on their health records. What type of learning method is used for this grouping??",
        opt1: "Supervised Learning",
        opt2: "Unsupervised Learning",
        opt3: "Sequential Learning",
        opt4: "None of the above",
        correct: "opt2",
    },
    {
        question: "A real estate agency wants to predict the selling price of a house based on features like the number of bedrooms, location, and size. Which type of machine learning task is this?",
        opt1: "Classification",
        opt2: "Clustering",
        opt3: "Regression",
        opt4: "Representation Learning",
        correct: "opt3",
    },
	{
        question: "A bank wants to classify incoming emails as either Fraud Alert or Regular Notification based on the content of the email. What kind of learning task is this?",
        opt1: "Regression",
        opt2: "Classification",
        opt3: "Clustering",
        opt4: "Representation Learning",
        correct: "opt3",
    },
	{
        question: "A weather forecasting system predicts the temperature of a city based on features such as humidity, wind speed, and pressure. What type of machine learning task is being used?",
        opt1: "Multiclass Classification",
        opt2: "Ordinal Learning",
        opt3: "Regression",
        opt4: "Clustering",
        correct: "opt3",
    },
	{
        question: "A travel company groups tourists into clusters based on their preferred destinations, travel budgets, and activities. What type of learning task is being performed?",
        opt1: "Regression",
        opt2: "Classification",
        opt3: "Clustering",
        opt4: "Sequential Learning",
        correct: "optc",
    },
	{
        question: "A facial recognition system learns features like the shape of eyes and nose automatically from a large dataset of images to identify individuals. What type of learning task is this?",
        opt1: "Clustering",
        opt2: "Representation Learning",
        opt3: "Regression",
        opt4: "Classification",
        correct: "opt2",
    },
	{
        question: "A smart keyboard predicts the next word while typing a sentence based on the sequence of previous words. What kind of task is this?",
        opt1: "Classification",
        opt2: "Clustering",
        opt3: "Sequential Learning",
        opt4: "Regression",
        correct: "optc",
    },
	{
        question: "A stock trading algorithm predicts the next day’s stock price based on historical price data. What type of learning is being used?",
        opt1: "Representation Learning",
        opt2: "Sequential Learning",
        opt3: "Clustering",
        opt4: "Multiclass Classification",
        correct: "opt2",
    },
	{
        question: "In which learning type is there no concept of a label?",
        opt1: "Supervised Learning",
        opt2: "Unsupervised Learning",
        opt3: "Sequential Learning",
        opt4: "Multiclass Classification",
        correct: "opt2",
    },
	{
        question: "Which of the following is an unsupervised learning task?",
        opt1: "Predicting housing prices",
        opt2: "Grouping customers by purchasing patterns",
        opt3: "Identifying whether an email is spam or not",
        opt4: "Ranking search results",
        correct: "opt2",
    },
	{
        question: "An example of representation learning is:?",
        opt1: "A neural network learning features from images",
        opt2: "Predicting product prices",
        opt3: "Assigning labels to emails",
        opt4: "Ranking search results",
        correct: "opt1",
    },
	{
        question: "Clustering algorithms are commonly used in which of the following?",
        opt1: "Recommender systems",
        opt2: "Predicting continuous values",
        opt3: "Grouping images by similar content",
        opt4: "Predicting ordinal outcomes",
        correct: "opt3",
    },
	{
        question: "Which task best represents sequential learning?",
        opt1: "Translating languages",
        opt2: "Classifying images",
        opt3: "Clustering documents",
        opt4: "Predicting static outcomes",
        correct: "opt1",
    },
	{
        question: "What is the difference between supervised and sequential learning?",
        opt1: "Sequential learning processes temporal data, while supervised does not.",
        opt2: "Supervised learning requires labels; sequential does not.",
        opt3: "Supervised learning is unsupervised; sequential is supervised.",
        opt4: "Sequential learning ignores data features.",
        correct: "opt1",
    },
	{
        question: "A researcher collects data on patients in a hospital. Each row in the dataset includes information like age, weight, and blood pressure for one patient. What does each row in the dataset represent?",
        opt1: "Feature",
        opt2: "Label",
        opt3: "Data Point",
        opt4: "Variable",
        correct: "opt3",
    },
	{
        question: "A company wants to predict the energy consumption of a factory. The dataset includes variables such as the number of machines operating, hours of operation, and temperature in the factory. What are these variables called??",
        opt1: "Labels",
        opt2: "Features",
        opt3: "Data Points",
        opt4: "Variables",
        correct: "opt2", 
    },
	{
        question: "In a dataset predicting whether a customer will renew their subscription, the column with Renewed or Not Renewed represents:?",
        opt1: "Features",
        opt2: "Data Points",
        opt3: "Labels",
        opt4: "Variables",
        correct: "opt3",
    },
	{
        question: "A healthcare system predicts whether a patient has Diabetes or No Diabetes based on their medical history. What kind of machine learning task is this?",
        opt1: "Regression",
        opt2: "Multiclass",
        opt3: "Classification",
        opt4: "Clustering",
        correct: "opt3",
    },
	{
        question: "A handwriting recognition system classifies handwritten characters into one of the 26 English alphabets (A–Z). What type of learning task is this??",
        opt1: "Multiclass Classification",
        opt2: "Regression",
        opt3: "Clustering",
        opt4: "Ordinal Learning",
        correct: "opt1",
    },
	{
        question: "An economist uses a model to predict the GDP of a country based on factors like population, export rate, and investment. What type of machine learning task is this?",
        opt1: "Classification",
        opt2: "Regression",
        opt3: "Clustering",
        opt4: "Multiclass",
        correct: "opt2",
    },
	{
        question: "In a dataset analyzing the performance of students in an online course, variables like Time Spent on the Platform, Number of Assignments Completed, and Quiz Scores are examples of:?",
        opt1: "Labels",
        opt2: "Features",
        opt3: "Data Points",
        opt4: "Outputs",
        correct: "opt2",
    },
];

// DOM elements
const questionNumberElement = document.getElementById("question-number");
const questionTextElement = document.getElementById("question-txt");
const option1Element = document.getElementById("option1");
const option2Element = document.getElementById("option2");
const option3Element = document.getElementById("option3");
const option4Element = document.getElementById("option4");
const nextButton = document.getElementById("next-button");
const startQuizButton = document.getElementById("start-quiz");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
const totalQuestions = quizQuestions.length;

// Function to show the quiz section
function startQuiz() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    if (!name || !roll) {
        alert("Please enter your name and roll number to start the quiz.");
        return;
    }

    // Store user info
    localStorage.setItem("name", name);
    localStorage.setItem("roll", roll);

    // Hide user info and show quiz section
    document.getElementById("user-info").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    // Display the first question
    showQuestion();
}

// Function to display a question
function showQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        goToResultPage();
        return;
    }

    // Reset the timer
    resetTimer();

    // Get current question
    const question = quizQuestions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    questionTextElement.textContent = question.question;
    option1Element.textContent = question.opt1;
    option2Element.textContent = question.opt2;
    option3Element.textContent = question.opt3;
    option4Element.textContent = question.opt4;

    // Clear previous selections
    document.querySelectorAll("input[name='opt']").forEach(input => (input.checked = false));
}

// Timer reset function
function resetTimer() {
    clearInterval(timerInterval);
    let timeLeft = 40;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleNextQuestion();
        }
    }, 1000);
}

// Handle Next button click
function handleNextQuestion() {
    const selectedOption = document.querySelector("input[name='opt']:checked");
    const correctOption = quizQuestions[currentQuestionIndex].correct;

    if (selectedOption) {
        userAnswers.push(selectedOption.id);
        if (selectedOption.id === correctOption) {
            score++;
        }
    } else {
        userAnswers.push(null); // No selection
    }

    currentQuestionIndex++;
    showQuestion();
}

// Go to the result page
function goToResultPage() {
    clearInterval(timerInterval);

    // Store results in localStorage
    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", totalQuestions);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizData", JSON.stringify(quizQuestions));

    // Redirect to result page
    window.location.href = "resultpage.html";
}

// Event listeners
startQuizButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextQuestion);
