class Augmentations extends RepeatingFieldset {
  constructor(name) {
    super('augementations')
    this.name = name
    this.notes = ''
    this.rating = ''
    this.essence = ''
  }

  getName() { return this.name }
  getNotes() { return this.notes }
  getRating() { return this.rating }
  getEssence() { return this.essence }

  setNotes(value) { this.notes = value }
  setRating(value) { this.rating = value }
  setEssence(value) { this.essence = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_augmentation`]: this.getName(),
      [`${row}_rating`]: this.getRating(),
      [`${row}_essence`]: this.getEssence(),
      [`${row}_notes`]: this.getNotes(),
      [`${row}_flag`]: this.getFlag(),
      [`${row}_display_flag`]: this.getDisplayFlag()
    }
  }
}
