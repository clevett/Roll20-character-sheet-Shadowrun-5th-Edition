const getInitiativeFromHeroLab = characterAttributes => {
  const object = findInHeroLabAttributes(characterAttributes, 'initiative')
  const modifier = getInitiativeModifierFromHeroLab(object)
  const dice = getInitiativeDiceFromHeroLab(object)
  return {...modifier, ...dice}
}

