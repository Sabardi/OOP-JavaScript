class mobil{
    //property
    constructor(merek, warna, kecepatan, platkendaraan){
        this.merek = merek;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this._platkendaraan = this.merek + " "+  Math.floor(Math.random()*1000)
    }
    get platkendaraan(){
        return this._platkendaraan;
    }
    set platkendaraan(platkendaraan){
        console.log("kamu tidak bisa mengubah nilai nya")
    }

    // method
    menyetir(){
        console.log(this.merek, this.warna, "sedang di kemudikan")
    }
    putar_balik(){
        console.log(this.merek, this.warna, "sedang putarbalik")
    }
    putar_arah(tujuan){
        console.log(this.merek, this.warna, "sedang putar arah ke ", tujuan)
    }

}

const mobil1 = new mobil("yamaha","biru",190," ");
console.log(mobil1)
mobil1.merek = "suzuki" //mengubah data nya
mobil1.menyetir();
mobil1.putar_balik();
mobil1.putar_arah("sembalun");


class mail{
    constructor(sender, receiver, subject, body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
    // method nya
    send(){
        console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
        // console.log("Sending mail from",this.sender, "to", this.receiver)
    }
    sendletter(delay){ // menambahkan parameter
        console.log(`Sending after ${delay} ms`);

        setTimeout(() => {
            this.send();
        }, delay);
    }

    saveAsDraft() {
        console.log('Saving mail as draft');
      }

}

const pesan = new mail("sabardi","burhan","utang","ttd")
console.log(pesan);

pesan.send()
pesan.sendletter(2000) //2000 argumen yang dikirim ke parameter
