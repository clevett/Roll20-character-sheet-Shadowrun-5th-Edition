const getInitiativeModifierFromHeroLab = object => {
  const modifier = new Initiative()

  modifier.setBase( parseInteger(object._base))

  const modifierDifference = parseInteger(object._modified) - parseInteger(object._base)
  modifier.setModifier(modifierDifference)
  
  const display = modifier.buildDisplay()
  modifier.setDisplay(display)

  return modifier.getSheetAttributes()
}

