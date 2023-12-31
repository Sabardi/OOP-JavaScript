# Object-Oriented Programming
Object-Oriented Programming (OOP) adalah salah satu paradigma dalam pemrograman yang berfokus pada pembuatan sebuah objek dan interaksi dengan objek-objek tersebut. Di OOP, objek merupakan sebuah entitas yang terdiri dari dua hal, yakni properties dan methods.

Properti merupakan nilai di dalam objek yang menyimpan informasi tentang objek tersebut.
Method merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
Paradigma OOP kerap digambarkan dengan kehidupan dunia nyata. Objek di dalam OOP, bisa kita anggap seperti objek yang ada di dunia nyata. Kita ambil contoh, mobil. Dalam OOP, sebuah mobil dapat dilihat sebagai objek yang memiliki beberapa properti seperti merek, warna, kecepatan maksimal, dan nomor rangka. Objek tersebut memiliki kemampuan atau method seperti maju, mundur, dan belok.

Melalui object blueprint, kita bisa membuat cetakan untuk membuat objek yang sudah terdefinisikan macam-macam properti dan method-nya. Sehingga kita cukup menggunakan cetakan tersebut untuk membuat objek yang serupa, tetapi kita bisa menentukan nilai-nilai properti yang berbeda.

Contohnya, Anda bisa membuat sebuah blueprint bernama Car. Di dalam blueprint tersebut, Anda bisa definisikan properti-properti dan method yang ingin dimiliki objek mobil nantinya. Setelah membuat sebuah blueprint, Anda bisa dengan mudah membuat banyak objek mobil contohnya myCar, yourCar, dan dicodingCar dengan lebih mudah.

![Alt text](image.png)

# Constructor Function
Di JavaScript, object blueprint dapat dibuat dengan menggunakan constructor function yang tampak seperti ini.

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}

Kode di atas merupakan contoh membuat object blueprint dari sebuah mobil. Anda bisa membuat objek mobil--yang merupakan instance dari Car--dengan memanfaatkan constructor function Car.

function Car(brand, color, maxSpeed, chassisNumber) {
  this.brand = brand;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.chassisNumber = chassisNumber;
}
 
Car.prototype.drive = function() {
  console.log(`${this.brand} ${this.color} is driving`);
}
 
Car.prototype.reverse = function() {
  console.log(`${this.brand} ${this.color} is reversing`);
}
 
Car.prototype.turn = function() {
  console.log(`${this.brand} ${this.color} is turning`);
}
 
// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
 
console.log(car1);
console.log(car2);
console.log(car3);
 
car1.drive();
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

# Sintaks Class di ES6
Sintaks JavaScript modern (ES6) menawarkan cara membuat constructor function dengan menggunakan keyword class. Hal ini membuat penerapan OOP di JavaScript mirip seperti bahasa pemrograman berbasis class. Kita bisa menulis constructor function Car dengan gaya class seperti ini.

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
car2.drive();
car3.drive();
 
/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

Jika Anda memiliki pengalaman di bahasa pemrograman C++, Java, atau C#, pembuatan class seperti di atas tentu lebih mudah dipahami, bukan? Memang inilah tujuan diciptakan sintaks class di JavaScript. Ia hadir untuk mempermudah penerapan OOP bagi developer yang memiliki latar belakang class-based language.

Walaupun di JavaScript sudah hadir sintaks class, hal itu tidak membuat JavaScript menjadi class-based language. Faktanya, sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function. Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.

class Car {};
console.log(typeof Car);
 
/* Output
function
*/

# Properti dan Method
Di dalam sebuah class, kita dapat mendefinisikan dua hal, yaitu properti dan method.


Properti
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Nilai dari properti biasanya diambil dari dari argumen constructor agar nilainya dapat bervariasi setiap kali membuat instance.

class Car {
 constructor(brand, color, maxSpeed, chassisNumber) {
   this.brand = brand;
   this.color = color;
   this.maxSpeed = maxSpeed;
   this.chassisNumber = chassisNumber;
 }
}
 
const car1 = new Car('BMW', 'red', 200, 'b-1');
const car2 = new Car('Audi', 'blue', 220, 'a-1');
const car3 = new Car('BMW', 'black', 250, 'b-2');
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'b-1' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'a-1' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'b-2' }
*/

Adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}
 
const car1 = new Car('BMW', 'red', 200);
const car2 = new Car('Audi', 'blue', 220);
const car3 = new Car('BMW', 'black', 250);
 
console.log(car1);
console.log(car2);
console.log(car3);
 
/* Output:
Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-558' }
Car { brand: 'Audi', color: 'blue', maxSpeed: 220, chassisNumber: 'Audi-215' }
Car { brand: 'BMW', color: 'black', maxSpeed: 250, chassisNumber: 'BMW-799' }
*/

# Properti Getter dan Setter
Accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.

Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

* method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
* method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.
Berikut contoh dari accessor property.

class User {
  constructor(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
 }
 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
 
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
 
const user = new User('John', 'Doe');
console.log(user);
console.log(user.fullName);
 
user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);
 
/* Output:
User { firstName: 'John', lastName: 'Doe' }
John Doe
User { firstName: 'Fulan', lastName: 'Fulanah' }
Fulan Fulanah
*/

# Method
Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn().

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
}

Sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya pada method turn() di class Car, kami memanfaatkan argumen direction untuk menetapkan arah dalam menjalankan method-nya.

Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya melalui keyword this.

Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut.

const car = new Car('BMW', 'red', 200);
 
car.drive();
car.turn('left');
car.reverse();
 
/* Output:
BMW red is driving
BMW red is turning left
BMW red is reversing
*/

# Member Visibility
Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.

class Car {
  #chassisNumber = null;
 
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber();
 }
 
  get chassisNumber() {
    return this.#chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
 
  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
 
  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
 
  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }
 
  #generateChassisNumber() {
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

# Pewarisan
Dalam pemrograman, kita sering sekali mendapati kasus membuat sebuah objek dengan spesifikasi yang serupa, tetapi memiliki beberapa perbedaan kecil. Contoh, objek EmailService dengan WhatsAppService. Kedua objek tersebut sama-sama layanan perpesanan, mereka dapat mengirim pesan dan membutuhkan properti sender. Namun, terdapat beberapa perbedaan contohnya WhatsApp bisa mengirim pesan secara broadcast, sedangkan email bisa mengirim pesan secara delay.

Paradigma OOP menawarkan solusi dalam memecahkan masalah ini dengan konsep pewarisan atau lebih dikenal dengan istilah inheritance.

Dengan konsep inheritance, kita bisa mewariskan sifat-sifat yang berada di dalam sebuah class ke class lain. Konsep inheritance cocok ketika kita ingin membuat objek yang mirip dan memiliki sedikit perbedaan seperti kasus yang kita hadapi.

Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class induk (superclass) dan sifat tersebut nantinya diwarisi kepada class di bawahnya (subclass). Kemudian pada subclass, kita bisa menambahkan kemampuan lain yang lebih spesifik.

Contohnya, kita buat superclass bernama MailService yang mengandung seluruh sifat yang sama pada WhatsAppService dan EmailService.

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

Kemudian kita warisi sifat dari MailService ke subclass WhatsAppService dan EmailService dengan menggunakan keyword extends seperti ini.

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
 
// Subclass
class WhatsAppService extends MailService {
 
}
 
// Subclass
class EmailService extends MailService {
 
}

Di dalam masing-masing subclass, kita bisa mendefinisikan method yang spesifik, seperti sendBroadcastMessage() untuk WhatsAppService dan sendDelayedMessage() untuk EmailService.

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
 
// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

Dengan teknik pewarisan seperti ini, akhirnya kita bisa membuat dua objek serupa dengan cara yang jauh lebih efektif.

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
whatsapp.sendDelayedMessage(); // Error
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error

# Operator instanceof

Untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu, kita bisa menggunakan operator instanceof.

1. operand1 instanceof operand2

Penjelasannya:

operand1: merupakan objek yang ingin dites prototype-nya.
operand2: merupakan constructor function atau class.

Berikut contoh penggunaan dari operator instanceof dalam mengecek objek whatsapp yang merupakan instance dari class WhatsAppService.

const whatsapp = new WhatsAppService('+6281234567890');
 
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false

Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan nilai true jika objek yang dites (operand pertama) memiliki prototype yang merupakan operand kedua. Jika prototype operand pertama bukanlah operand kedua, operasinya akan menghasilkan nilai false.

Operator instanceof juga akan mengecek prototype secara berantai. Artinya, instanceof juga mengecek hingga prototype yang diwarisi oleh objek tersebut.

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true

# Overriding
Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

Di JavaScript dan bahasa pemrograman yang menerapkan paradigma OOP lainnya, overriding umumnya dapat dilakukan pada constructor dan method class.

# Constuctor Overriding
Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik hanya pada subclass tertentu. Contoh, pada WhatsAppService yang merupakan subclass dari MailService, kita membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat properti baru bernama isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan constructor overriding.

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}
 
class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);
 
    this.isBusiness = isBusiness;
  }
}

Overriding constructor dilakukan sesimpel kita mendefinisikan kembali method constructor() pada sebuah subclass. Selain itu, method constructor didefinisikan dengan perubahan sesuai kebutuhan kita, misalnya menambahkan menambahkan properti dan argumen isBusiness. Satu hal yang penting dalam penerapan constructor overriding adalah jangan sampai lupa untuk memanggil method super().

Method Overriding
Konsep overriding juga bisa diterapkan pada method class. Method overriding biasanya dilakukan ketika kita ingin mengubah implementasi method warisan superclass. Contohnya, pada class MailService terdapat method send() yang sudah didefinisikan implementasinya. Namun, jika pada subclass WhatsAppService kita membutuhkan implementasi yang berbeda, kita bisa override method send().

Cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil method super di dalamnya. Jika dibutuhkan, kita juga bisa memanggil method sendMessage() dari superclass melalui keyword super.sendMessage().

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
 
class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
 
  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);
  
    console.log('message sent via WhatsApp');
  }
}
 
 
const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);
 
mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
 
/**
* Output:
* someSender sent Hai, apa kabar? to
* someSender sent Hai, apa kabar? to +6289876543210
* message sent via WhatsApp
*/

# Built-In Class

Di JavaScript sudah terdapat built-in class atau class bawaan, seperti Date, Object, Array, Math, dan String. Class bawaan dapat kita manfaatkan untuk berbagai hal, mulai dari manipulasi data-data terkait dengan array, operasi matematika, manipulasi karakter, ataupun manipulasi objek.

Mari kita ambil contoh class Date.

Date merupakan class bawaan JavaScript yang digunakan untuk utilitas terkait tanggal dan waktu. Class ini sangat membantu ketika program yang kita buat terdapat penggunaan dan manipulasi tanggal dan waktu. Kita bisa mudah untuk mendapatkan waktu dalam bentuk instance Date atau mengonversinya ke dalam berbagai format yang kita inginkan.

Berikut contoh dalam penggunaan class bawaan Date.

const date = new Date();
 
const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});
 
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});
 
const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});
 
console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);
 
/**
* Output:
* 22/12/2022 10.37.14
* 2022/12/22 12:37:14
* 22/12/2022 11.37.14
*/

Lihat! Betapa mudahnya kita mendapatkan data waktu di JavaScript dengan menggunakan class bawaan Date. Selain yang kami contohkan, masih banyak hal yang bisa kita lakukan dengan class Date. Anda bisa eksplorasi fitur-fitur dari class Date pada dokumentasi berikut: Date() constructor.

Mari kita berbicara tentang class bawaan lain, yang menjadi salah satu favorite kami adalah Array.

Dengan class Array, kita bisa membuat struktur data dalam bentuk array.

const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray); // ['a', 'b', 'c', 'a', 'b', 'c']

Sekilas, tidak ada spesial dari class ini karena sebenarnya kita bisa membuat array seperti itu dengan menggunakan array literals (tanda []). Namun, dengan class Array, kita bisa menerapkan konsep pewarisan untuk membuat subclass baru yang dapat kita modifikasi sesuai kebutuhan. 

Contohnya, kita ingin membuat sebuah struktur data mirip array, tetapi nilai tiap elemennya unik, maka kita bisa membuat subclass UniqueArray yang mewarisi class Array. Di dalam subclass UniqueArray, implementasinya tampak seperti ini.

class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
 
    super(...uniqueValue);
  }
 
  add(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}
 
const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.add('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.add('a');
console.log(someArray); // ['a', 'b', 'c', 'd']

Menarik, bukan? Dengan konsep OOP, kita bisa extends kemampuan JavaScript lebih dari standar yang ada.

Kami tekankan lagi, di samping Date dan Array, terdapat banyak class bawaan JavaScript yang bisa Anda eksplorasi. Pemahaman Anda terhadap konsep-konsep OOP bisa membuka jalan untuk menambahkan atau memodifikasi kemampuan standar JavaScript.

Berikut beberapa class bawaan JavaScript yang bisa Anda eksplorasi secara mandiri:

Date
Object
Array
Math
String
Number


# LINK Yt 
https://youtu.be/Z5I46E3-QMU

# Materi Pendukung
Berikut ini beberapa materi tambahan yang bisa Anda pelajari untuk mendalami seputar Object-Oriented Programming (OOP):

Object-oriented JavaScript for beginners
A Guide to Object-Oriented Programming in JavaScript