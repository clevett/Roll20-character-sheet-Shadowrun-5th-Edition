
const importHeroLab = character => {
  console.log(`%c HERO LAB IMPORTER:`, "color: purple; font-weight:bold");
  new Promise((resolve, reject) => {
    const Roll20Character = associateHeroLabData(character)
    console.log(Roll20Character.character)
    setCharmancerText(Roll20Character.text);
    resolve(Roll20Character.character)
  }).then(Roll20Character => {
    setAttrs(Roll20Character)
    return importerHiddenInputsBuilder(Roll20Character)
  }).then(importerHiddenInputs => {
    setCharmancerText(importerHiddenInputs)
  })
}

