class Armor extends RepeatingFieldset {
  constructor(name) {
    super('armor')
    this.name = name
    this.notes = ''
    this.rating = ''
    this.acid_modifier = ''
    this.cold_modifier = ''
    this.electrical_modifier = ''
    this.fire_modifier = ''
    this.radiation_modifier = ''
    this.modifications = ''
  }

  getName() { return this.name }
  getNotes() { return this.notes }
  getRating() { return this.rating }
  getAcid() { return this.acid_modifier }
  getCold() { return this.cold_modifier }
  getElectrical() { return this.electrical_modifier }
  getFire() { return this.fire_modifier }
  getRadiation() { return this.radiation_modifier }
  getModifications() { return this.modifications }

  setNotes(value) { this.notes = value }
  setRating(value) { this.rating = value }
  setAcid(value) { return this.acid_modifier = value  }
  setCold(value) { return this.cold_modifier = value  }
  setElectrical(value) { return this.electrical_modifier = value  }
  setFire(value) { return this.fire_modifier = value  }
  setRadiation(value) { return this.radiation_modifier = value  }
  setModifications(value) { this.modifications = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_name`]: this.getName(),
      [`${row}_rating`]: this.getRating(),
      [`${row}_acid_modifier`]: this.getAcid(),
      [`${row}_cold_modifier`]: this.getCold(),
      [`${row}_electrical_modifier`]: this.getElectrical(),
      [`${row}_fire_modifier`]: this.getFire(),
      [`${row}_radiation_modifier`]: this.getRadiation(),
      [`${row}_modifications`]: this.getModifications(),
      [`${row}_notes`]: this.getNotes(),
      [`${row}_flag`]: this.getFlag(),
      [`${row}_display_flag`]: this.getDisplayFlag()
    }
  }
}
