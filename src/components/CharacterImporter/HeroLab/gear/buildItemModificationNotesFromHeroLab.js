const buildItemModificationNotesFromHeroLab = ({ item }) => {
  const list = convertToArray(item)
  let names = '', notes =  ''

  list.forEach(element => {
    const { _name, description } = element
    names += `${_name}, `
    notes += `\n ${_name}: ${description}, `
  })

  //notes not currently used
  //Roll20 cuts them off
  return {names, notes}
}
