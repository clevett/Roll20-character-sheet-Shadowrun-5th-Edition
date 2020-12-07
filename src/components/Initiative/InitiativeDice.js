
class InitiativeDice extends SheetAttribute {
  constructor(name) {
    super(name)
    this.base = 1
  }
  
  getAttrsArray() {
    const name = this.name
    const bonus = [`${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]
    return [...bonus, 'edge_toggle']
  }

  getInitiativeDice(edgeFlag) {
    const total = this.getTotal()
    return edgeFlag ? 5 : Math.min(total, 5)
  }

  getSheetAttributes() {
    const name = this.getName()

    return  {
      [`${name}`]: this.getTotal(),
      [`${name}_temp`]: this.getTemp(),
      [`${name}_temp_flag`]: this.getTempFlag(),
      [`${name}_modifier`]: this.getModifier()
    }
  }
}

