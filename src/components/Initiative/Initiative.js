
class Initiative extends SheetAttribute {
  constructor() {
    super('initiative_mod')
  }

  getAttrsArray() {
    const attributes = ['reaction', 'intuition']
    const bonus = ['initiative_mod_modifier', 'initiative_temp','initiative_temp_flag']
    return [...attributes, ...bonus]
  }

  getSheetAttributes() {
    const name = this.getName()

    return  {
      [`${name}`]: this.getTotal(),
      [`initiative_temp`]: this.getTemp(),
      [`initiative_temp_flag`]: this.getTempFlag(),
      [`${name}_modifier`]: this.getModifier(),
      [`${name}_display`]: this.getDisplay()
    }
  }
}

