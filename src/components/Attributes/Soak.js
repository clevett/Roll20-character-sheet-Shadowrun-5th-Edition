class Soak extends SheetAttribute {
  constructor() {
    super('soak')
  }

  getAttrsArray() {
    const attributes = ['body', 'armor_rating']
    const bonus = ['soak_modifier', 'soak_temp', `soak_temp_flag`]
    return [...attributes, ...bonus]
  }
}
