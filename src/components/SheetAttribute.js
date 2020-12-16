
class SheetAttribute {
  constructor(name) {
    this.name = name
    this.base = 0
    this.temp = 0
    this.tempFlag = true
    this.modifier = 0
    this.total = this.getTotal()
    this.display = this.buildDisplay()
  }

  setBase(value) { this.base = value }
  setTemp(value) { this.temp = value }
  setTempFlag(value) { this.tempFlag = value }
  setModifier(value) { this.modifier = value }
  setTotal(value) { this.total = value }
  setDisplay(value) { this.display = value }

  getName() { return this.name }
  getBase() { return this.base }
  getTemp() { return this.temp }
  getTempFlag() { return this.tempFlag }
  getModifier() { return this.modifier }
  getDisplay() { return this.display }

  getBonus() {
    const temp = this.getTempFlag() ? this.getTemp() : 0
    return temp + this.getModifier()
  }

  buildDisplay() {
    const base = this.getBase()
    const total = this.getTotal()
    return base == !total || total == base ? base : `${base} (${total})`
  }

  getTotal() {
    return this.base + this.getBonus()
  }
}