const associateMovementFromHeroLab = (characterMovement, { agility }) => {
  const [land] = characterMovement
  const {running, walking} = land
  const walk = new Movement('walk', agility)
  const run = new Movement('run', agility)

  const checkForModifier = (speed, { _value }) => {
    const heroLabSpeed = parseInt(_value)
    return speed != heroLabSpeed ? heroLabSpeed - speed : false
  }

  const walkModifierCheck = checkForModifier(walk.getSpeed(), walking)
  walkModifierCheck ? walk.setModifier(walkModifierCheck) : false

  const runModifierCheck = checkForModifier(run.getSpeed(), running)
  runModifierCheck ? run.setModifier(runModifierCheck) : false
  
  return { ...walk.getSheetAttributes(), ...run.getSheetAttributes() }
}

