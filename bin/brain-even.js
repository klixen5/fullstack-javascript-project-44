#!/usr/bin/env node

import readlineSync from 'readline-sync'

const isEven = number => number % 2 === 0 ? 'yes' : 'no'

const even = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let rounds = 3
  while (rounds > 0) {
    const random = Math.floor(Math.random() * 20)
    console.log(`Question: ${random}`)
    const answer = readlineSync.question('Your answer: ')
    const trueAnswer = isEven(random)

    if (trueAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      break
    }
    if (trueAnswer === answer) {
      console.log('Correct!')
    }

    rounds -= 1
  }

  if (rounds === 0) {
    console.log(`Congratulations, ${name}!`)
  }
}

even()
