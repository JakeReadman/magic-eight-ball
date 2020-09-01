let userName;
const nameDisplay = document.getElementById('name');
const answers = [
  'You wish!',
  'Who really cares?',
  'You bet your ass!',
  'Have you tried no?',
  'You bore me',
  'Buy me a drink first',
  'No with a but',
  'Yes with an if',
];

const submitBtn = document.getElementById('submit-btn');
const questionDisp = document.getElementById('question-display');
const form = document.querySelector('form');
const answerDisp = document.querySelector('.textbox');
const triangle = document.querySelector('.triangle');

const getName = () => {
  userName = prompt('What is your Name');
  if (userName === '') {
    prompt('Please enter a valid name');
  }
};

const getRandomWord = () => {
  return answers[Math.floor(Math.random() * answers.length)];
};

const ani = () => {
  triangle.classList.add('triangle-ani');
  answerDisp.classList.add('text-ani');
};

const removeAni = () => {
  triangle.classList.remove('triangle-ani');
  answerDisp.classList.remove('text-ani');
};

const validateQ = (question) => {
  if (question[question.length - 1] !== '?') {
    alert('Ask a real question please');
  } else {
    questionDisp.textContent = `You asked: ${question}`;
    question
      ? (answerDisp.textContent = getRandomWord())
      : (answerDisp.textContent = '');
    ani();
    setTimeout(removeAni, 3000);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = document.getElementById('question').value;
  validateQ(question);
});

getName();

nameDisplay.textContent = `Hi ${userName}, please ask a question below`;
