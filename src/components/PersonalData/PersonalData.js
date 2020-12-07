
class PersonalData {
  constructor() {
    this.name = null,
    this.metatype = null,
    this.ethnicity = null,
    this.age = null,
    this.sex = null,
    this.height = null,
    this.weight = null
  }

  setName(value) { this.name = value}
  setMetatype(value) { this.metatype = value}
  setEthnicity(value) { this.ethnicity = value}
  setAge(value) { this.age = value}
  setSex(value) { this.sex = value}
  setHeight(value) { this.height = value}
  setWeight(value) { this.weight = value}

  getName() { return this.name }
  getMetatype() { return this.metatype }
  getEthnicity() { return this.ethnicity }
  getAge() { return this.age  }
  getSex() { return this.sex  }
  getHeight() { return this.height }
  getWeight() { return this.weight }

  getSheetAttributes() {
    return  {
      character_name: this.getName(),
      metatype: this.getMetatype(),
      ethnicity: this.getEthnicity(),
      age: this.getAge(),
      sex: this.getSex(),
      height: this.getHeight(),
      weight: this.getWeight()
    }
  }
}
