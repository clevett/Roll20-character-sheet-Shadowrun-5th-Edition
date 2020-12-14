class RangeWeapon extends RepeatingFieldset {
  constructor(name) {
    super('range')
    this._name = name
    this._damage = ''
    this._accuracy = ''
    this._armorPenentration = '',
    this._mode = 'SS'
    this._modeOptions = ''
    this._recoil = ''
    this._range = ''
    this._ammo = ''
    this._modifications = ''
  }

  getName() { return this._name }
  getNotes() { return this.notes }
  getDamage() { return this._damage }
  getACC() { return this._accuracy }
  getAP() { return this._armorPenentration }
  getMode() { return this._mode }
  getRecoil() { return this._recoil }
  getAmmo() { return this._ammo }
  getModeOptions() { return this._modeOptions }
  getRange() { return this._range }
  getModifications() { return this._modifications }

  setNotes(value) { this.notes = value }
  setDamage(value) { this._damage = value }
  setACC(value) { this._accuracy = value }
  setAP(value) { this._armorPenentration = value }
  setMode(value) { this._mode = value }
  setRecoil(value) { this._recoil= value  }
  setAmmo(value) { this._ammo = value }
  setRange(value) { this._range = value }
  setModeOptions(value) { this._modeOptions = value }
  setModifications(value) { this._modifications = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_weapon`]: this.getName(),
      [`${row}_damage`]: this.getDamage(),
      [`${row}_acc`]: this.getACC(),
      [`${row}_ap`]: this.getAP(),
      [`${row}_mode`]: this.getMode(),
      [`${row}_recoil`]: this.getRecoil(),
      [`${row}_ammo`]: this.getAmmo(),
      [`${row}_mode_options`]: this.getModeOptions(),
      [`${row}_range`]: this.getRange(),
      [`${row}_modifications`]: this.getModifications(),
      [`${row}_notes`]: this.getNotes(),
      [`${row}_flag`]: true,
      [`${row}_display_flag`]: this.getDisplayFlag()
    }
  }
}
