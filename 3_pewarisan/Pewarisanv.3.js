//superclass
class kirim{
    //ini induk nya 
    //punya property kirim
    constructor(kirim){
        this.kirim = kirim;
    }
    
}

//subclass
class pesan extends kirim{//nurun dari inaknya=kirim. construct kirim
    kirimPesan(pesan, tujuan){
        console.log(this.kirim," sent ",pesan," to ",tujuan);
    }
}

//subclass
class email extends kirim{
    kirimEmail(pesan, tujuan){
        console.log(this.kirim," sent ",pesan," to ",tujuan);
    }
}

const pesannya = new pesan('083');
pesannya.kirimPesan('haloBapak', 'asep');

const emailnya = new email('@mail.com');
emailnya.kirimEmail('haloJuga', 'asep');