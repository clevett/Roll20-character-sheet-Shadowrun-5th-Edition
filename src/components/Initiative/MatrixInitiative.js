
class MatrixInitiative extends SheetAttribute {
  constructor() {
    super('matrix_mod')
  }

  getAttrsArray() {
    const attributes = ['intuition', "data_processing", "pilot", "host_rating", "level", "sheet_type"]
    const bonus = ['matrix_mod_modifier']
    return [...attributes, ...bonus]
  }

  determineSecondAttribute(type) {
    switch(type) {
      case 'sprite':
        return 'level'
      case 'vehicle':
        return 'pilot'
      case 'host': 
        return 'host_rating'
      default:
        return 'intuition'
    }
  }
}

