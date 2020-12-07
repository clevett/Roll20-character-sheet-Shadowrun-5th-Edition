class Overflow extends SheetAttribute{
  constructor() {
    super('overflow')
  }

  getAttrsArray() {
    const attributes = ['body']
    const bonus = ['overflow_modifier']
    return [...attributes, ...bonus]
  }
}
