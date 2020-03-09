import * as _ from 'lodash';

class person {
  name: String;
  constructor(name: String) {
    this.name = name
  }
  sayName() {
    console.log(`my name is ${this.name}`)
  }
  testLodah() {
    console.log(`lodash must be use @type/lodash 校验库 ${ _.join(['1','2'], '~') }`)
  }
}
const personIns = new person('xiongchuanyu');
personIns.sayName();
personIns.testLodah();
