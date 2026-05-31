import app from '../index.js'

const descriptionGame = () => 'Answer "yes" if the number is even, otherwise answer "no".'

const getQuestion = () => Math.floor(Math.random() * 20)

const getAnswer = question => (question % 2 === 0 ? 'yes' : 'no')

export default () => app(descriptionGame, getQuestion, getAnswer)
