import app from '../index.js'

const descriptionGame = () => 'What is the result of the expression?'

const getQuestion = () => {
  const operations = ['+', '-', '*']
  const random = operations[Math.floor(Math.random() * operations.length)]
  const first = Math.floor(Math.random() * 20)
  const second = Math.floor(Math.random() * 20)
  switch (random) {
    case '+':
      return `${first} + ${second}`
    case '-':
      return `${first} - ${second}`
    case '*':
      return `${first} * ${second}`
  }
}

const getAnswer = (question) => {
  const items = question.split(' ')
  const first = Number.parseInt(items[0])
  const second = Number.parseInt(items.at(-1))
  const operation = items[1]
  switch (operation) {
    case '+':
      return String(first + second)
    case '-':
      return String(first - second)
    case '*':
      return String(first * second)
  }
}

export default () => app(descriptionGame, getQuestion, getAnswer)
