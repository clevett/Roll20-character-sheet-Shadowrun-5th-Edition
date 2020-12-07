
class Limit extends SheetAttribute {
  constructor(name) {
    super(name)
    attributes = this.determineAttributes()
  }

  determineAttributes() {
    switch(this.getName()) {
      case 'mental':
        return ['intuition', 'willpower', 'logic']
      case 'physical': 
        return ['body', 'reaction', 'strength']
      case 'social':
        return ['essence', 'willpower', 'charisma']
      default:
        errorMessage('determineAttributes in Limit class', 'name did not match the switch cases')
    }
  }
}
