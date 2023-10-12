class MailService {
    constructor(sender) {
      this.sender = sender;
    }
}

const mailService = new MailService('someReceiver');
console.log(mailService); 