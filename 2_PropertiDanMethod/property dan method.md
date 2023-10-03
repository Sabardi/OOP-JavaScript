Dengan menggunakan class, kita bisa terhindar dari banyak duplikasi kode dalam membuat banyak objek sekaligus.
Di dalam sebuah class, kita dapat mendefinisikan dua hal, yaitu properti dan method. Di materi kali ini kita akan membahas lebih detail mengenai keduanya.
# Properti
Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class
Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chassisNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.

class motor{
    constructor(inisialkendaraan,  warna, kecepatan, platnomer){
        this.merekmotornya = inisialkendaraan;
        this.warnanya = warna;
        this.kecepatannya = kecepatan;
        this.platnomernya = this.merekmotornya + " " + Math.floor(Math.random() * 1000 + 1)
    }

}

const motor1 = new motor("dr", "hitam", 1200,420)
console.log(motor1);

# Properti Getter dan Setter
Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan mudah ketika objek mobil telah dibuat.

class motor{
    constructor(inisialkendaraan,  warna, kecepatan, platnomer){
        this.merekmotornya = inisialkendaraan;
        this.warnanya = warna;
        this.kecepatannya = kecepatan;
        this.platnomernya = this.merekmotornya + " " + Math.floor(Math.random() * 1000 + 1)
    }
}

const motor1 = new motor("dr", "hitam", 1200,420)
console.log(motor1);


Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah?, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.
=> ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.
property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek. Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.
contoh kode nya
class user{
    constructor(fistname, lastname){
        this.nama_awal = fistname;
        this.nama_akhir = lastname;
    }
    get Fullname(){
    return this.nama_awal + " "+ this.nama_akhir
    }
    set Fullname(Fullname){ // supaya bisa mengubah data nya
        const[fistname, lastname] = Fullname.split(" ");
        this.nama_awal = fistname;
        this.nama_akhir = lastname
    }

}

const panggil = new user("sabardi","baharudim");

console.log(panggil)
panggil.Fullname = "ilham mustafa"
console.log(panggil.Fullname);
