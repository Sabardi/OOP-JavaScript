Method 
------
adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().

* method bisa menerima sebuah argumen. Contohnya pada method turn() di class Car dan sendLater di class Mail, kami memanfaatkan argumen direction dan delay untuk menetapkan arah dan waktu delay dalam menjalankan method-nya.

Selain argumen, method juga dapat memiliki akses ke nilai properti atau method lainnya melalui keyword this.

* Method di dalam class hanya bisa dijalankan melalui instance dari class tersebut.

* Method memang kental dengan “kemampuan” yang bisa dilakukan oleh sebuah class, tetapi praktik nyatanya membuat method tidak hanya untuk itu. Method juga biasa dibuat ketika kita perlu mengekstraksi sebuah kode agar lebih mudah untuk dibaca dan method tersebut hanya digunakan untuk kebutuhan internal saja.
* Agar kode di dalam constructor lebih rapi, kita bisa membuat method yang digunakan internal yang menampung kode random tersebut. Biasanya method yang hanya digunakan secara internal disebut dengan private dan namanya diawali dengan tanda underscore.








