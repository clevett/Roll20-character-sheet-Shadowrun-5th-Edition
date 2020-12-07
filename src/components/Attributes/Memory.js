class Memory extends SheetAttribute  {
  constructor() {
    super('memory')
  }

  getAttrsArray() {
    const attributes = ['logic', 'willpower']
    const bonus = ['memory_modifier']
    return [...attributes, ...bonus]
  }
}
