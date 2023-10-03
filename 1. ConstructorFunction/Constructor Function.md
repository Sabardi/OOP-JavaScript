Constructor Function
--------------------
JavaScript bukanlah class-based language, melainkan prototype-based language. Menariknya, konsep-konsep OOP yang memanfaatkan class seperti pewarisan dapat dilakukan dengan memanfaatkan prototype. Alih-alih menggunakan class, prototype-lah yang diadaptasi JavaScript.

Mungkin saat ini Anda bertanya-tanya, bagaimana bisa membuat sebuah objek dengan sebuah fungsi? Itulah salah satu kemampuan fungsi di JavaScript. Fungsi di atas bukanlah fungsi biasa, melainkan constructor function. Berikut beberapa perbedaan yang harus Anda perhatikan.

1. Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.
2. Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.

3. Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.
Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.
Perlu Anda ingat bahwa constructor function hanya dapat dibuat dengan reguler function. Anda tidak dapat membuat constructor function dengan arrow function. Arrow function tidak dapat dipanggil dengan keyword new.