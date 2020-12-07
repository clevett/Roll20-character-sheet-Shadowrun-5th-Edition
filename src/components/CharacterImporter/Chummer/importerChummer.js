
const importChummer = character => {
  //Match Chummer JSON keys with their sheet attribute. 
  //Chummer name is the key, Roll20 sheet atribute is the value.
  new Promise((resolve, reject) => {
    const Roll20Character = associateChummerData(character)
    setCharmancerText(Roll20Character.text);
    resolve(Roll20Character.character)
  }).then(Roll20Character => {
    setAttrs(Roll20Character)
    return importerHiddenInputsBuilder(Roll20Character)
  }).then(importerHiddenInputs => {
    setCharmancerText(importerHiddenInputs)
  })
}
