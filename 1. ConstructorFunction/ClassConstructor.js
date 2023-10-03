// constructor function
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3); 
   
  car1.drive();
  car2.reverse();
  car3.turn();


  //menggunakan oprasi aritmatika
  class OprasiMatika{
    constructor(angka1,angka2,hasil){
        this.angka1 = angka1;
        this.angka2 = angka2;
        this.hasil = hasil;
    }
    penjumlahan(){
        console.log("hasil nya : ",this.hasil = this.angka1 + this.angka2)
    }
}
hitunghasil = new OprasiMatika(20,40);
console.log(hitunghasil)
hitunghasil.penjumlahan();


// belomterjawab salah pemikiran
// class Nama {
//     //prperti
//     nama;
//     // method
//     tampilnama(){
//         console.log("Nama saya adakalaah : ".this.nama )
//     }
// }
// namasaya = new Nama();
// nama = ("sabardi")Properti dan Method
// nama.tampilnama();

class Buah {}
console.log(typeof buah)