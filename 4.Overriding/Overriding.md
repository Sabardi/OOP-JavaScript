# Overriding
* Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya. 
* Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di subclass pada sebuah method yang berasal dari superclass
* Overriding juga biasa diterapkan ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

# Constructor Overriding
* Constructor merupakan method spesial pada class yang akan dipanggil pada saat pembuatan instance, lebih tepatnya ketika menggunakan keyword new diikuti dengan nama class.
Constructor akan mengembalikan objek yang merupakan instance dari class tersebut. Perbedaan dengan method pada umumnya, pada constructor kita tidak perlu menulis return ketika hendak mengembalikan nilai karena sudah dilakukan secara implisit.

* Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainya. Contoh, pada superclass MailService, kita mendefinisikan properti sender yang nilainya diambil dari argumen method constructor.

* Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik hanya pada subclass tertentu

* Contoh, pada WhatsAppService yang merupakan subclass dari MailService, kita membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat properti baru bernama isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan constructor overriding.

* Overriding constructor dilakukan sesimpel kita mendefinisikan kembali method constructor() pada sebuah subclass. Selain itu, method constructor didefinisikan dengan perubahan sesuai kebutuhan kita, misalnya menambahkan properti dan argumen isBusiness. Satu hal yang penting dalam penerapan constructor overriding adalah jangan sampai lupa untuk memanggil method super(). 

Memanggil method super() artinya memanggil constructor superclass, yaitu MailService. Dengan begitu, kita tidak perlu mendefinisikan dan menetapkan nilai properti umum satu per satu. Meskipun dalam contoh kali ini properti yang bersifat umum hanya ada satu, yaitu sender, tetapi jika jumlah propertinya bertambah, kita tidak perlu menulis kode yang berulang pada setiap subclass.

Pada sintaks class, pemanggilan super() tidak boleh terlewatkan karena akan menyebabkan ReferenceError.

