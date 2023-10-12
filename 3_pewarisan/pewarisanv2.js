// Superclass
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
   
  // Subclass
  class WhatsAppService extends MailService {
    sendBroadcastMessage(pesannya, receivers) { //pesan nya itu parameter dan reciver parameter juga
        for (const penerimanya of receivers) {
          this.sendMessage(pesannya, penerimanya);// this.sendMessage di warisi oleh induk nya
        }
      }
  }
   
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }
  }

  //menampilkan data dari induk

  const pesannya = new MailService("asep")
  pesannya.sendMessage("hallo bos", "bambang")
console.log("==============")
  const pesanwaservice = new WhatsAppService("hahah")
  pesanwaservice.sendBroadcastMessage("apa kabar", "burhan")

console.log("==============")
const pesanemail = new EmailService("budi")
pesanemail.sendDelayedMessage("sabarya","bud anduk",3000)
