const generateNewAugemenationFromHeroLab = (ware, type) => {
  const {_essencecost, _rating, _name } = ware
  const aug = new Augmentations(`${_name} (${type})`)
  const notes = buildItemNotesFromHeroLab(ware)

  aug.setRating(_rating || '')
  aug.setEssence(_essencecost || '')
  aug.setNotes(notes)

  return aug
}

const associateAugmentationFromHeroLab = ({ cyberware, bioware }) => {
  const cyber = convertToArray(cyberware.item)
  const bio = convertToArray(bioware.item)
  let data = {}

  cyber.forEach(item => {
    const newAug = generateNewAugemenationFromHeroLab(item, 'cyberware')
    const attribues = newAug.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  bio.forEach(ware => {
    const newAug = generateNewAugemenationFromHeroLab(ware, 'bioware')
    const attribues = newAug.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  return data
}
