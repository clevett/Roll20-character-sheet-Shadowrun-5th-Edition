
class AstralInitiative extends SheetAttribute {
  constructor() {
    super('astral_mod')
  }

  getAttrsArray() {
    const attributes = ['intuition']
    const bonus = ['astral_mod_modifier']
    return [...attributes, ...bonus]
  }
}

