class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      console.log('I have a ',this.carname)
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      console.log( this.present() + ', it is a ' + this.model)
    }
  }
  
  let myCars = new Car("Ford");
  myCars.present()
//   console.log(myCars)
  
  let myCar = new Model("nnn","Mustang");
  myCar.show()