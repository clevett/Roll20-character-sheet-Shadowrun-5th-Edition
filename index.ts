import { Console } from 'console'
const Defense = {}

const changed = event => {
  console.log(event)
  const defense = new Defense()
  console.log(defense)
}

on('clicked:reload', eventinfo => changed(eventinfo))
