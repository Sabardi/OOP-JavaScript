//induk nya
class MailService{
    constructor(sender){
        this.sender = sender
    }
    SebutNama(message , receiver){
        console.log("from",this.Kirim, message, "to", receiver)
    }
}
const mailService = new MailService("sabardi")
mailService.SebutNama("hallo om", "om firman")

// super class
class mail extends MailService{
//     // overriding constructor
    constructor(sender, isBusiness){
        super(sender);
        console.log(this.isBusiness = isBusiness)
//         this.Kirim = sender
//         this.WaBusiness = isBusiness
    }
}

const whatsapp = new  mail("+6281234567890", true)
// console.log(whatsapp)