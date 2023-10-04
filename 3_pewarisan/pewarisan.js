class WhatsAppService {
        //property
        constructor(sender) {
          this.sender = sender;
        }
        // method   
        sendMessage(message, receiver) {
          console.log(`${this.sender} sent ${message} to ${receiver}`);
        }
       
        // sendBroadcastMessage(message, receivers) {
        //   for (const receiver of receivers) {
        //     this.sendMessage(message, receiver);
        //   }
        // }
      }
       
      class EmailService {
        constructor(sender) {
          this.sender = sender;
        }
       
        sendMessage(message, receiver) {
          console.log(`${this.sender} sent ${message} to ${receiver}`);
        }
       
        // sendDelayedMessage(message, receiver, delay) {
        //   setTimeout(() => {
        //     this.sendMessage(message, receiver);
        //   }, delay);
        // }
      }
    
      // Whatsapp = new WhatsAppService("araham");
      // Whatsapp.sendMessage("apa kabar", "ibrahim")
      // Whatsapp.sendBroadcastMessage("bagiamana", "ibrahim")
    
      // email = new EmailService("ahmad")
      // email.sendMessage("apa bisa ketemu sekarang","yusup")
      // email.sendDelayedMessage("ababab","hahahah")


      // super class
     class MailService {
        constructor(sender) {
          this.sender = sender;
        }
       
        sendMessage(message, receiver) {
          console.log(`${this.sender} sent ${message} to ${receiver}`);
        }

        // sendDelayedMessage(message, receiver, delay) {
        //   setTimeout(() => {
        //     this.sendMessage(message, receiver);
        //   }, delay);
        // }
       
        // sendBroadcastMessage(message, receivers) {
        //   for (const receiver of receivers) {
        //     this.sendMessage(message, receiver);
        //   }
        // }
      }
       
      const whatsapp = new MailService('+6281234567890');
      // whatsapp.sendMessage("bapak","@bapaku.com")
      // whatsapp.sendDelayedMessage("hallo","@maugimanalagi.com")
      // whatsapp.sendBroadcastMessage("ayoook gas", "@bapakmujua.com")

      const gmail = new MailService('dimas@dicoding.com');
      // gmail.sendMessage("bapak","@bapaku.com")
      // gmail.sendDelayedMessage("hallo","@maugimanalagi.com")
      // gmail.sendBroadcastMessage("ayoook gas", "@bapakmujua.com")

      //subclass
      class WhatsAppService extends MailService{
        sendBroadcastMessage(message, receivers) {
          for (const receiver of receivers) {
            this.sendMessage(message, receiver);
          }
        }
      
      }

      class EmailService extends MailService{
        sendDelayedMessage(message, receiver, delay) {
          setTimeout(() => {
            this.sendMessage(message, receiver);
          }, delay);
        }      
      }

      const Whatsapp = new WhatsAppService('+6281234567890');
      const email = new EmailService('dimas@dicoding.com');


