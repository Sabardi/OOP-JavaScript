// clas induk
class MailService{
    constructor(send) {
      this.sen = send;
    }
    pengirim(){
        console.log("mengirim ke "+this.sen)
    }
  }
  
  //subclass
  class WhatsAppService extends MailService{
  //   overriding constructor
  constructor(sender, isBusiness){
    super(sender);
    this.bisnis = isBusiness;
  }
  pesan(){
    console.log(this.sen,"mengirim ke Akun ",this.bisnis)
  }
  
  // Overriding method
  sendMessage(message, receiver) {
    console.log(this.sender ,"sent", message, "to", receiver, via ,"WhatsApp");
    }
  }

//memanggil overriding kelas\

const Mail_serviss = new MailService("abram");
Mail_serviss.pengirim();
// const wa_servis = new WhatsAppService("Ibrahim","abram");
// wa_servis.pesan() 
