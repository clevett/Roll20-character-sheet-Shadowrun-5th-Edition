
class MatrixInitiativeDice extends InitiativeDice {
  constructor() {
    super('matrix_dice')
  }

  matrixGetAttrsArray() {
    return [...this.getAttrsArray(), 'matrix_mode_toggle']
  }
}
