// class oprator{
//     constructor(hasil){
//         this.hasil = hasil
//     }
//     penjumlahan(){
//         console.log(this.hasil)
//     }
// }

// class hitung extends oprator{
//     constructor(angka1, angka2){
//         super(angka1)
//         this.a1 = angka1
//         this.a2 = angka2
//     }
//     hitungaja(){
//         console.log(this.a1 + this.a2)
//     }
// }

// hitung = new hitung()
// // hitung.hitungaja(90,90)
// // console.log(hitung)


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  mycar = new Model(9, 0);
console.log(mycar)