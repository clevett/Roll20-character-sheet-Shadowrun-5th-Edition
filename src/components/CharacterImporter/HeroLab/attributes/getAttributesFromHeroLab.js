const getAttributesFromHeroLab = (heroLabData, sheetAttributes) => {
  const attributeData = {}

  sheetAttributes.forEach(name => {
    const object = findInHeroLabAttributes(heroLabData, name)
    const attribute = new Attribute(name)
  
    if (object) {
      attribute.setBase(parseInteger(object._base))
      attribute.setModifier(object._modified - object._base)
      attribute.setTotal(parseInteger(object._modified))

      const display = attribute.buildDisplay()
      attribute.setDisplay(display)
    }

    const updateAttribues = attribute.getSheetAttributes()
    for (const [key, value] of Object.entries(updateAttribues)) {
      attributeData[key] = value
    }
  })
  
  attributeData['essence'] = findInHeroLabAttributes(heroLabData, 'essence')._modified
  attributeData['edge'] = findInHeroLabAttributes(heroLabData, 'edge')._modified
  
  return attributeData
}
