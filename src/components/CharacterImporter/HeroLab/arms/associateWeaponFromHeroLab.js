const generateNewWeaponFromHeroLab = weapon => {
  const {weaponinfo, _name, modifications } = weapon
  const type = weapon.weaponinfo.ranges || weapon.ammunition != "" ? 'range' : 'melee'
  const item = type == 'range' ? new RangeWeapon(_name) : new MeleeWeapon(_name)

  let notes = buildItemNotesFromHeroLab(weapon)
  if(weapon._rating) {
    notes += `Rating: ${weapon._rating}`
  }

  if (weapon && modifications) {
    const mods = buildItemModificationNotesFromHeroLab(modifications)
    item.setModifications(mods.names)
  }

  if (weaponinfo) {
    item.setAP(weaponinfo._ap)
    item.setDamage(weaponinfo._damagetext)

    const dicePool = weaponinfo._dicepool
    const ACC = dicePool.includes(' [') ? dicePool.split(' [')[1].slice(0, -1) : ''
    item.setACC(ACC)

    if (type == 'range') {
      item.setRecoil(weaponinfo._recoilcomp)
    } else {
      item.setReach(weaponinfo._reach)
    }
  }

  if (weaponinfo && weaponinfo._modestextmode) {
    item.setModeOptions(_modestext)
  }

  if (weaponinfo && weaponinfo.ranges) {
    item.setRange(weaponinfo.ranges._text)
  }

  item.setNotes(notes)

  return item
}


const associateWeaponFromHeroLab = ({ item }) => {
  const weaponList = convertToArray(item)
  let data = {}

  weaponList.forEach(weapon => {
    const newWeapon = generateNewWeaponFromHeroLab(weapon)
    const attribues = newWeapon.getSheetAttributes()
    for (const [key, value] of Object.entries(attribues)) {
      data[key] = value
    }
  })


  return data

}
