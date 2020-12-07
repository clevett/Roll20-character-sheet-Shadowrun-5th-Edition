const buildItemMatrixNotesFromHeroLab = ({ matrixattribute }) => {
  let notes = ''
  matrixattribute.forEach(attribute => {
    const { _name, _modified } = attribute
    const number = parseInt(_modified)
    notes += number ? `${_name}: ${_modified}, ` : ''
  })

  return notes
}
