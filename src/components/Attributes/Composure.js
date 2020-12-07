class Composure extends SheetAttribute {
  constructor() {
    super('composure')
  }

  getAttrsArray() {
    const attributes = ['charisma', 'willpower']
    const bonus = ['composure_modifier']
    return [...attributes, ...bonus]
  }
}
