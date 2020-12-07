const findInHeroLabAttributes = (array, term) => {
  return array.find(element => element._name.toLowerCase() == term)
}
