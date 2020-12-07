
const getReputationsFromHeroLab = ({ reputation }) => {
  let characterSheetAttributes = {
    street_cred: null,
    notoriety: null,
    public_awareness: null,
    misc: null
  }

  const astralReputation = value => `Astral Rep: ${value}`

  const matchRep = ({ _name, _value }) => {
    switch(_name) {
      case "Street Cred":
        characterSheetAttributes.street_cred = _value
        break
      case "Notoriety":
        characterSheetAttributes.notoriety = _value
        break
      case "Public Awareness":
        characterSheetAttributes.public_awareness = _value
        break
      case "Astral Reputation":
        characterSheetAttributes.misc = astralReputation(_value)
        break
      default:
        return
    }
  }

  reputation.forEach(rep => matchRep(rep) )

  return characterSheetAttributes
}

