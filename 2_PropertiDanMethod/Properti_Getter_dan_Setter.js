const { EDGE_RUNTIME_WEBPACK } = require("next/dist/shared/lib/constants");

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
// get dan set nya  nama method nya harus sama 
}
const panggil = new user("sabardi","baharudim");
console.log(panggil)
panggil.Fullname = "ilham mustafa"
console.log(panggil.Fullname);

//mendefinisikan properti dari  kelas itu sendiri
console.log("===================")

class Mobil {
    constructor(merek,warna,kecepatan, nokendaraan){
        this.merek = merek
        this.warna = warna
        this.kecepatan = kecepatan
        this._nokendaraan = merek + " " +Math.floor(Math.random()* 1000);
    }
get nokendaraan(){
    return this._nokendaraan;
}
set nokendaraan(nokendaraan){
    console.log("kamu tidak di perbolehkan mengganti no kendaraan")
}
}

const mobil1 = new Mobil("supra","Pink",120, " ");
console.log(mobil1);
mobil1.merek = "india";
console.log(mobil1);

console.log(mobil1.nokendaraan);
mobil1.nokendaraan = "bmbb";
console.log(mobil1.nokendaraan)
