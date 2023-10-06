class WhatsAppService{
    //property
    constructor(sender) {
        this.sender = sender;
      }
      // method   
      sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
      }
}

class EmailService{
    constructor(sender) {
        this.sender = sender;
      }
     
      sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
      }
}

//super class

class MailService{
    constructor(sender) {
        this.sender = sender;
      }
      sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
      }
}

//subclass
class whatsappservice extends MailService{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }      
}

const Whatsapp = new WhatsAppService('+6281234567890');
// const email = new EmailService('dimas@dicoding.com');
