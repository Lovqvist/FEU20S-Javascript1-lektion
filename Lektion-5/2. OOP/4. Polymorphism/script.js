/* 
    PLOYMORPHISM
    Arv mellan klasser
*/


// Våran super klass
class Monster {
  constructor(name) {
    this.name = name
  }

  attack() {
    console.log(`The monster ${this.name} is hitting you!`)
  }
}




class FireMonster extends Monster {
  constructor(name) {
    super(name)
  }

  attack() {
    super.attack();
    console.log(`${this.name} is also throwing a fireball at you.`)
  }
}

class WaterMonster extends Monster {
  constructor(name) {
    super(name)
  }

  waterAttack() {
    console.log(`The monster ${this.name} is sending a large wave of water right at you`);
    super.attack();
    console.log(`${this.name} Is also blasting you with a straw`)
  }
}

class StoneMonster extends Monster {
  constructor(name) {
    super(name)
  }
}

const fm = new FireMonster('Blazor');
const wm = new WaterMonster('Wateruz');
const sm = new StoneMonster('StoneFace');
// fm.attack()
// wm.attack()
// wm.waterAttack()
// sm.attack()



class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  priceInclVat(nr) {
    if(nr)
      return nr * 1.25
    else
      return this.price * 1.25
  }
}


class food extends Product {
  constructor(name, price) {
    super(name, price)
  }

  sale(nr) {
    let newPrice = super.priceInclVat() - nr
    // let newPrice = this.price - nr
    // let price = this.price - nr
    // let newPrice = super.priceInclVat(price)
    console.log(newPrice);
  }

  // sale(nr) {
  //   this.price = this.price - nr
  // }

}


const f1 = new food('snickers', 100);

console.log(f1.priceInclVat())
f1.sale(30);
console.log(f1)
// f1.sale(100);