class WhatsAppService{
    //property
    constructor(sender){
        this.sender = sender;
    }
    //method
    sendMessage(message, receiver){
        console.log(this.sender, "send",message, "to", receiver)
    }
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers ) {
            this.sendMessage(message, receiver);
            
        }
    }
}

const whatsapp = new WhatsAppService("Sabardi");
whatsapp.sendMessage("hallo", "ibrahim")
whatsapp.sendBroadcastMessage("apakabar", "abraham")

class EmailService {
    //properti
    constructor(sender){
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(this.sender, "send",message, "to", receiver)
    }
    //method
    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    } 
}
sendemail = new EmailService("abraham")
sendemail.sendMessage("hamdi" , "asep")
