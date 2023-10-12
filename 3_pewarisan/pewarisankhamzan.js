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



// //super class

// class MailService{
//     constructor(sender) {
//         this.sender = sender;
//       }
//       sendMessage(message, receiver) {
//         console.log(`${this.sender} sent ${message} to ${receiver}`);
//       }
// }

// //subclass
// class WhatsAppService extends MailService{
//     sendBroadcastMessage(message, receivers) {//ngirim pesan banyak penerima
//         for (const receiver of receivers) {//loop tergantung banyak penerima
//             this.sendMessage(message, receiver)//liat inaknya
//         }
//       }      
// }
// //subclass
// class EmailService extends MailService{
//     sendDelayedMessage(message, receiver) {
//         setTimeout(() => {
//           this.sendMessage(message, receiver);
//         }, 3000);
//       }      
// }

// const whtasapp = new WhatsAppService('pengirim');
// whtasapp.sendBroadcastMessage('halo', ['penerima1', 'penerima2'])
// const email = new EmailService('dimas@dicoding.com');
// email.sendDelayedMessage('inipesan','penerima');