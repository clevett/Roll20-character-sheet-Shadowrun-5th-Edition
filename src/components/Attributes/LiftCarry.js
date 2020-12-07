class LiftCarry extends SheetAttribute  {
  constructor() {
    super('lift_carry')
    this.attributes = ['body', 'strength']
    this.bonus = ['lift_carry_modifier']
  }

  getAttrsArray() {
    const attributes = ['body', 'strength']
    const bonus = ['lift_carry_modifier']
    return [...attributes, ...bonus]
  }
}
