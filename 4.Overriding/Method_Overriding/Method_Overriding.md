Konsep overriding juga bisa diterapkan pada method class. Method overriding biasanya dilakukan ketika kita ingin mengubah implementasi method warisan superclass. Contohnya, pada class MailService terdapat method send() yang sudah didefinisikan implementasinya. Namun, jika pada subclass WhatsAppService kita membutuhkan implementasi yang berbeda, kita bisa override method send().

Cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil method super di dalamnya.

kode nya
---------
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
 
class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
 
  // Overriding method
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
  }
}
 
 
const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);
 
mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
 
 
/**
* Output:
* someSender sent Hai, apa kabar? to someReceiver
* +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
*/

# Jika dibutuhkan, kita juga bisa memanggil method sendMessage() dari superclass melalui keyword super.sendMessage().
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }

}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }
  
 
  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log('message sent via WhatsApp');
  }
}


const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

/**
* Output:
* someSender sent Hai, apa kabar? to someReceiver
* +6281234567890 sent Hai, apa kabar? to +6289876543210
* message sent via WhatsApp
*/