// clas induk
class MailService{
  constructor(send) {
    this.sen = send;
  }
  pengirim(){
      console.log("mengirim ke "+this.sen)
  }
}

class WhatsAppService extends MailService{
//   overriding constructor
constructor(sender, isBusiness){
  super(sender);
  this.bisnis = isBusiness;
}
pesan(){
  console.log(this.sen,"mengirim ke Akun ",this.bisnis)
}
}

// const mailServices = new WhatsAppService("3929ssss023082","392902308dd2");
// console.log(mailService)

const mai = new MailService("hakki")
mai.pengirim();

console.log("========")
//memanggil overriding kelas
const wa_servis = new WhatsAppService("Ibrahim","abram");
wa_servis.pesan() 
