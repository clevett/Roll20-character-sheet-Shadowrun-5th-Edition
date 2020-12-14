class MeleeWeapon extends RepeatingFieldset {
  constructor(name) {
    super('melee')
    this._name = name
    this._damage = ''
    this._accuracy = ''
    this._armorPenentration = '',
    this._reach = 0
    this._modifications = ''
  }

  getName() { return this._name }
  getNotes() { return this.notes }
  getDamage() { return this._damage }
  getACC() { return this._accuracy }
  getAP() { return this._armorPenentration }
  getReach() { return this._reach }
  getModifications() { return this._modifications }

  setNotes(value) { this.notes = value }
  setDamage(value) { this._damage = value }
  setACC(value) { this._accuracy = value }
  setAP(value) { this._armorPenentration = value }
  setReach(value) { this._reach = value }
  setModifications(value) { this._modifications = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_weapon`]: this.getName(),
      [`${row}_damage`]: this.getDamage(),
      [`${row}_accuracy`]: this.getACC(),
      [`${row}_ap`]: this.getAP(),
      [`${row}_reach`]: this.getReach(),
      [`${row}_modifications`]: this.getModifications(),
      [`${row}_notes`]: this.getNotes(),
      [`${row}_flag`]: true,
      [`${row}_display_flag`]: this.getDisplayFlag()
    }
  }
}
