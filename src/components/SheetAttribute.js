
class SheetAttribute {
  constructor(name) {
    this._name = name
    this._base = 0
    this._temp = 0
    this._tempFlag = true
    this._modifier = 0
    this._total = this.calculateTotal()
    this._display = this.buildDisplay()
  }

  set base(value) { this._base = value }
  set temp(value) { this._temp = value }
  set tempFlag(value) { this._tempFlag = value }
  set modifier(value) { this._modifier = value }
  set total(value) { this._total = value }
  set display(value) { this._display = value }

  get name() { return this._name }
  get base() { return this._base }
  get temp() { return this._temp }
  get TempFlag() { return this._tempFlag }
  get modifier() { return this._modifier }
  get total() { return this._total }
  get display() { return this._display }

  buildDisplay() {
    const total = this.total
    return base == !total || total == this.base ? this.base : `${this.base} (${total})`
  }

  calculateBonus() {
    const temp = this.tempFlag ? this.temp : 0
    return temp + this.modifier
  }

  calculateTotal() {
    return this.base + this.calculateBonus()
  }
}
