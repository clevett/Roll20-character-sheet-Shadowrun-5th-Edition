const associateAugmentationFromHeroLab = ({ cyberware, bioware }) => {
  const cyber = Array.isArray(cyberware) ? cyberware.item : [cyberware.item]
  const bio = Array.isArray(bioware) ? bioware.item : [bioware.item]
  let data = {}

  const associateData = (ware, type) => {
    const {_essencecost, _rating, _name } = ware
    const aug = new Augmentations(`${_name} (${type})`)
    let notes = buildItemNotesFromHeroLab(ware)

    aug.setRating(_rating || '')
    aug.setEssence(_essencecost || '')
    aug.setNotes(notes)

    return aug
  }

  cyber.forEach(ware => {
    const newAug = associateData(ware, 'cyberware')
    const attribues = newAug.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  bio.forEach(ware => {
    const newAug = associateData(ware, 'bioware')
    const attribues = newAug.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })

  return data
}
