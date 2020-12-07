class Defense extends SheetAttribute {
  constructor() {
    super('defense')
  }

  getAttrsArray() {
    const attributes = ['reaction', 'intuition']
    const bonus = ['defense_modifier', 'defense_temp', `defense_temp_flag`]
    return [...attributes, ...bonus]
  }
}
