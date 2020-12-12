const generateNewArmorFromHeroLab = armor => {
  const {armorinfo, _name, modifications } = armor
  const item = new Armor(_name)
  let notes = buildItemNotesFromHeroLab(armor)

  if (armor && modifications) {
    const mods = buildItemModificationNotesFromHeroLab(modifications)
    item.setModifications(mods.names)
  }

  item.setNotes(notes)

  if (armorinfo) {
    item.setRating(parseInteger(armorinfo._rating))
    item.setAcid(parseInteger(armorinfo._acid))
    item.setCold(parseInteger(armorinfo._cold))
    item.getElectrical(parseInteger(armorinfo._electrical))
    item.getFire(parseInteger(armorinfo._fire))
    item.getRadiation(parseInteger(armorinfo._radiation))
  }

  item.setNotes(notes)

  return item
}


const associateArmorFromHeroLab = ({ item }) => {
  const armorList = convertToArray(item)
  let data = {}

  armorList.forEach(armor => {
    const newArmor = generateNewArmorFromHeroLab(armor)
    const attribues = newArmor.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  return data
}