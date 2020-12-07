const buildItemNotesFromHeroLab = item => {
  const { 
    accessories,
    ammunition,
    availability,
    description, 
    gearcost,
    matrix,
    modifications,
    othergear,
    programs,
    _size,
    _wireless
  } = item
  let notes = ''

  const lineBreak = '=================================================='

  notes += accessories ? `Accessories: ${accessories}, \n` : ''
  notes += ammunition ? `Ammunition: ${ammunition._value}, \n` : ''
  notes += accessories || ammunition ? lineBreak : ''

  notes += availability ? `Availability: ${availability._value}, \n` : ''
  notes += gearcost ? `Cost: ${gearcost._text}, \n` : ''
  notes += availability || gearcost ? lineBreak : ''

  if (matrix.matrixattribute) {
    const matrixArrayNotes = buildItemMatrixNotesFromHeroLab(matrix)
    notes += matrixArrayNotes ? `${matrixArrayNotes} \n` : ''
  }

  notes += _wireless ? `Wireless: ${_wireless}, \n` : ''
  notes += programs ? `Programs: ${programs}, \n` : ''
  notes += _wireless || programs ? lineBreak : ''

  notes += othergear ? `Other Gear: ${othergear}, \n` : ''
  notes += _size ? `Size: ${_size}, \n` : ''
  notes += modifications || othergear || _size ? lineBreak : ''

  notes += description ? `\n${description}` : ''
  
  return notes
}
