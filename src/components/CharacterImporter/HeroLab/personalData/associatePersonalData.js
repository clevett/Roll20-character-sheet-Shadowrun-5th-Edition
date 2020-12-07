const associatePersonalData = character => {
  /* Personal Info */
  const personal = new PersonalData()
  personal.setName(character._name )
  personal.setMetatype(character.race._name)
  personal.setEthnicity(character.heritage._name)
  personal.setAge(character.personal._age)
  personal.setSex(character.personal._gender)
  personal.setHeight(character.personal.charheight._text)
  personal.setWeight(character.personal.charweight._text)

  /* Rewards */
  const rewards = new RewardsData()
  rewards.setKarma(character.karma._left)
  rewards.setTotalKarma(character.karma._total)

  /* Reputations */
  const reputations = getReputationsFromHeroLab(character.reputations)
  rewards.setSteetCred(reputations.street_cred)
  rewards.setNotoriety(reputations.notoriety)
  rewards.setPublicAwareness(reputations.public_awareness)
  rewards.setMisc(reputations.misc)

  return {...personal, ...rewards}
}
