// super kelas atau induk nya
class oprator{
    constructor(hasil){
        this.hasil = hasil
    }
    hasil(){
        console.log("hasilnya :",this.hasil)
    }
}

// subclass atau anak nya
class perkalian extends oprator{
    constructor(angka1, angka2){
        super(angka1)
        this.hasil = angka2 * angka2
    }
}
 
let hitung = new perkalian(2, 30)
console.log(hitung)

class pembagian extends oprator{
    constructor(angka1, angka2){
        super(angka1)
        console.log(this.hasil = angka1 / angka2)
    }
}

let hitungbagian = new pembagian(20,10)

// super class
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return "I have a " + this.carname
//     }
//   }

//   mycar = new Car("susuki")
//   console.log (mycar.present())

// //   sub class
// class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   let myCar = new Model("Ford", "Mustang");
//   console.log(myCar.show())
//   console.log(myCar)