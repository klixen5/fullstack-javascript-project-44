import readlineSync from 'readline-sync'

const app = (descriptionGame, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  const description = descriptionGame()
  console.log(description)

  let rounds = 3
  while (rounds > 0) {
    const question = getQuestion()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')
    const realAnswer = getAnswer(question)
    if (answer === realAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'`)
      console.log(`Let's try again, ${name}!`)
      break
    }
    rounds -= 1
  }

  if (rounds === 0) {
    console.log(`Congratulations, ${name}!`)
  }
}

export default app
