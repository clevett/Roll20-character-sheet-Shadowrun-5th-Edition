
class Attribute extends SheetAttribute {
  constructor(name) {
    super(name)
  }

  getAttrsArray() {
    const name = this.getName()
    return [`${name}_base`, `${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]
  }

  getSheetAttributes() {
    const name = this.getName()

    return  {
      [`${name}`]: this.getTotal(),
      [`${name}_base`]: this.getBase(),
      [`${name}_temp`]: this.getTemp(),
      [`${name}_temp_flag`]: this.getTempFlag(),
      [`${name}_modifier`]: this.getModifier(),
      [`${name}_display`]: this.getDisplay()
    }
  }
}
