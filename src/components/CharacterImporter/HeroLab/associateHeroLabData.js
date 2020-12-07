
const associateHeroLabData = character => {
  let setText = {
    "error": "",
    "results": "",
    "ignored": ""
  }

  /* Player Name */
  const metaData = {
    player_name: character._playername,
    sheet_type: character._role //Need to check this for NPCs
  }

  /* Personal Info */
  const personalData = associatePersonalData(character)

  /* ATTRIBUTES */
  const characterAttributes = character.attributes.attribute
  const attributes = [...physicalAttributes, ...mentalAttributes, ...specialAttributes]
  const attributeData = getAttributesFromHeroLab(characterAttributes, attributes)
  
  const specialFlag = attributeData.magic ? 'magic' : attributeData.resonance ? 'resonance' : 'mundane'
  attributeData['flag_special'] = specialFlag

  const initiativeData = getInitiativeFromHeroLab(character.attributes.attribute)

  const characterMovement = character.movementtypes.movementtype
  const movementData = associateMovementFromHeroLab(characterMovement, attributeData)

  /* GEAR */
  const gearItemData = associateGearItemsFromHeroLab(character.gear.equipment)

  /* Augs */ 
  if (character.gear.augmentations) {
    const augsData = associateAugmentationFromHeroLab(character.gear.augmentations)
    console.log(augsData)
  }

  /* TESTING */
  delete(character.settings)
  delete(character.images)
  delete(character.creation)
  delete(character.karma)
  delete(character.attributes)
  delete(character.movementtypes)
  delete(character.personal)
  delete(character.reputations)
  delete(character.race)
  console.log(character)

  const Roll20Character = {
    ...metaData,
    ...personalData,
    ...attributeData,
    ...initiativeData,
    ...movementData,
    ...gearItemData,
  }

  
  //Will need to return character eventually
  return {text: setText, character: Roll20Character}
}

