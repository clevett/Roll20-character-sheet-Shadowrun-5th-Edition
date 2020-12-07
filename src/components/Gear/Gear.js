class Gear extends RepeatingFieldset {
  constructor(name) {
    super('items')
    this.name = name
    this.notes = ''
    this.rating = ''
    this.quantity = '',
    this.modifications = ''
  }

  getName() { return this.name }
  getNotes() { return this.notes }
  getRating() { return this.rating }
  getQuantity() { return this.quantity }
  getModifications() { return this.modifications }

  setNotes(value) { this.notes = value }
  setRating(value) { this.rating = value }
  setQuantity(value) { this.quantity = value }
  setModifications(value) { this.modifications = value }

  getSheetAttributes() {
    const row = this.buildRowName()

    return  {
      [`${row}_item`]: this.getName(),
      [`${row}_rating`]: this.getRating(),
      [`${row}_quantity`]: this.getQuantity(),
      [`${row}_notes`]: this.getNotes(),
      [`${row}_modifications`]: this.getModifications(),
      [`${row}_flag`]: this.getFlag(),
      [`${row}_display_flag`]: this.getDisplayFlag()
    }
  }
}
