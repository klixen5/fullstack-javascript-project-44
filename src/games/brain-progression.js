import app from '../index.js'

const descriptionGame = () => 'What number is missing in the progression?'

const getCurrent = (start, index, step) => start + index * step

let answer = null
const getQuestion = () => {
  const progression = []
  const minCount = 5
  const start = Math.floor(Math.random() * 10)
  const step = Math.floor(Math.random() * 10)
  const count = Math.floor(Math.random() * 6) + minCount
  for (let i = 0; i < count; i++) {
    progression.push(getCurrent(start, i, step))
  }
  const randomIndex = Math.floor(Math.random() * progression.length)
  const x = progression[randomIndex]
  answer = String(x)
  progression[randomIndex] = '..'
  return progression.join(' ')
}

const getAnswer = () => answer

export default () => app(descriptionGame, getQuestion, getAnswer)
