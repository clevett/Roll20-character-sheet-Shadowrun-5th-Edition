
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
  const movementData = characterMovement ? associateMovementFromHeroLab(characterMovement, attributeData) :  {}

  /* GEAR */
  const gearItemData = character.gear.equipment ? associateGearItemsFromHeroLab(character.gear.equipment) : {}

  /* Augs */ 
  const augsData = character.gear.augmentations ? associateAugmentationFromHeroLab(character.gear.augmentations) : {} 

  /* Armor */
  const armorData = character.gear.armor ? associateArmorFromHeroLab(character.gear.armor) : {}

  /* Weapons */
  const weaponData = character.gear.weapons ? associateWeaponFromHeroLab(character.gear.weapons) : {}

  console.log(weaponData)

  /* TESTING */
  delete(character.gear.augmentations)
  delete(character.gear.equipment)
  delete(character.gear.armor)
  delete(character.settings)
  delete(character.images)
  delete(character.creation)
  delete(character.karma)
  delete(character.attributes)
  delete(character.movementtypes)
  delete(character.personal)
  delete(character.reputations)
  delete(character.race)
  console.log("%c Hero Lab JSON", "color: orange; font-weight:bold")
  console.log(character.gear.weapons)

  const Roll20Character = {
    ...metaData,
    ...personalData,
    ...attributeData,
    ...initiativeData,
    ...movementData,
    ...gearItemData,
    ...augsData,
    ...armorData,
    ...weaponData,
  }
  
  //Will need to return character eventually
  return {text: setText, character: Roll20Character}
}

