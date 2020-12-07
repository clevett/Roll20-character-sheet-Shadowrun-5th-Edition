const getInitiativeDiceFromHeroLab = object => {
  const dice = new InitiativeDice('initiative_dice')

  const heroLabDice = object._text.split('+')[1].split('D6')[0]

  const diceDifference = parseInteger(heroLabDice) - dice.getBase()
  dice.setModifier(diceDifference)

  return dice.getSheetAttributes()
}

