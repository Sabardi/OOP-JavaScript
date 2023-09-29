const mobil = {
    //property
    brand : "honda",
    warna : "red",
    maxsped : 150,
    DR : "DR 5678 HG",

    //method
    pengendara : ()=>{
        console.log("pengendara")
    },
    putarbalik: () => {
        console.log('putarbalik');
      },
      belok: () => {
        console.log('belok')
      }
}

console.log(mobil.brand);
console.log(mobil.warna);
console.log(mobil.maxsped);
console.log(mobil.DR);

mobil.pengendara()
mobil.putarbalik()
mobil.belok()