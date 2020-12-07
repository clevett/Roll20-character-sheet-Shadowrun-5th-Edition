class JudgeIntentions extends SheetAttribute {
  constructor() {
    super('judge_intentions')
    this.attributes = ['charisma', 'intuition']
    this.bonus = ['judge_intentions_modifier']
  }

  getAttrsArray() {
    const attributes = ['charisma', 'intuition']
    const bonus = ['judge_intentions_modifier'] 
    return [...attributes, ...bonus]
  }
}
