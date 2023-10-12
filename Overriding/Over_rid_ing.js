//induk nya
class MailService{
    constructor(sender){
        this.sender = sender
    }
    SebutNama(message , receiver){
        console.log("from",this.sender, message, "to", receiver)
    }
}
// const mailService = new MailService("sabardi")
// mailService.SebutNama("hallo om", "om firman")

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

const pesanmail = new MailService("Sabardi")
pesanmail.SebutNama("gimana", "bambang")
console.log(pesanmail)
console.log("==============")

console.log("==============")


console.log("==============")
