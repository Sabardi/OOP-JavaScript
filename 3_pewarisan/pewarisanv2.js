class Mobil {
    constructor(mereknya){
        this.merek = mereknya;
    }
    mengemudi(jenis){
        console.log("saya mengemudi mobil bermerek ", this.merek, "jenis nya ", jenis)
    }
}

mobilsaya = new Mobil("honda")
mobilsaya.mengemudi("honda juga")


class MobilPickUp extends Mobil{
    constructor(merek,jenis){
        super(merek)
        this.MobilPickUp = jenis
    }
    sewamobil(){
        console.log("halo mempunya merek", this.merek ,"dan jenis", this.MobilPickUp)
    }
}

const mobilku = new MobilPickUp("susuki", "supra")
mobilku.sewamobil()
// // mobilku.sewa