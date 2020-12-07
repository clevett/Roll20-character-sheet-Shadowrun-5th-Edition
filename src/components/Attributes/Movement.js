class Movement extends SheetAttribute {
  constructor(name, agility = 0) {
    super(name)
    this.agility = agility
    this.multiplier = this.defaultMultiplier(name)
  }

  setMultiplier(value) { this.multiplier = value }

  getAgility() { return this.agility }
  getMultiplier() { return this.multiplier }

  defaultMultiplier(name) {
    switch(name) {
      case 'walk':
        return 2
      case 'run' :
        return 4
      default:
        errorMessage('defaultMultiplier in Movement class', 'name did not match the switch cases')
    }
  }

  getAttrsArray() {
    const attributes = ['agility']
    const bonus = ['walk_modifier', 'run_modifier']
    return [...attributes, ...bonus]
  }

  getSpeed() {
    return (this.getAgility() * this.getMultiplier()) + this.getModifier()
  }

  getSheetAttributes() {
    const name = this.getName()

    return  {
      [`${name}`]: this.getSpeed(),
      [`${name}_modifier`]: this.getModifier()
    }
  }
}


