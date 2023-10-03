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
