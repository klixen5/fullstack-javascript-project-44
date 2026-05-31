import app from '../index.js'

const descriptionGame = () => 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getQuestion = () => Math.floor(Math.random() * 20)

const isPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number) + 1; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getAnswer = question => isPrime(question) ? 'yes' : 'no'

export default () => app(descriptionGame, getQuestion, getAnswer)
