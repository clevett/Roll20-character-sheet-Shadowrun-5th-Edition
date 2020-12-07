const buildItemModificationNotesFromHeroLab = ({ item }) => {
  const listCheck = Array.isArray(item)
  let names = '', notes =  ''

  if (listCheck) {
    item.forEach(element => {
      const { _name, description } = element
      names += `${_name}, `
      notes += `\n ${_name}: ${description}, `
    })
  } else {
    const { _name, description } = item
    names += _name
    notes += `\n ${description}`
  }

  return {names, notes}
}
