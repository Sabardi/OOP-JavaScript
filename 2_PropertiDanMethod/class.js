class mobil{
    constructor(merek, warna, kecepatan, platnomer){
        this.merek = merek;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this.platnomer = platnomer;
    }
    pengendara(){
        console.log("merek mobil ini adalah : ",this.merek," dan warna nya ",this.warna)
    }
}

const asep = new mobil("yamaha", "ping", 120, "Dr bb67272")
console.log(asep)

asep.pengendara()

//mendefinisikan properti dari  kelas itu sendiri
class motor{
    constructor(inisialkendaraan,  warna, kecepatan, platnomer){
        this.merekmotornya = inisialkendaraan;
        this.warnanya = warna;
        this.kecepatannya = kecepatan;
        this.platnomernya = this.merekmotornya + " " + Math.floor(Math.random() * 1000 + 1)
    }

}

const motor1 = new motor("dr", "hitam", 1200,420)
// motor1.platnomernya = "2627"  akan mengubah nilai plat nya yang sudah ada

console.log(motor1);
