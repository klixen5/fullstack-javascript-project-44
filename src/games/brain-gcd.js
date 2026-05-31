import app from '../index.js'

const descriptionGame = () => 'Find the greatest common divisor of given numbers.'

const getQuestion = () => {
  const first = Math.floor(Math.random() * 20)
  const second = Math.floor(Math.random() * 20)
  return `${first} ${second}`
}

const gcd = (a, b) => {
  while (b != 0) {
    [a, b] = [b, a % b]
  }

  return a
}

const getAnswer = (question) => {
  const [first, second] = question.split(' ').map(n => Number.parseInt(n))
  return String(gcd(first, second))
}

export default () => app(descriptionGame, getQuestion, getAnswer)
