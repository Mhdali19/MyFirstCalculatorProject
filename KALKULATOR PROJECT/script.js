// Buat variabel untuk menyimpan bilangan pertama(misalnya, bilangan1).
let bilangan1;



// Buat variabel untuk menyimpan operasi(misalnya, operator).
let operator;


// Buat variabel untuk menyimpan bilangan kedua(misalnya, bilangan2).
let bilangan2;



// Buat variabel untuk menyimpan hasil perhitungan(misalnya, hasil).
let hasil;


// Minta pengguna memasukkan bilangan pertama.
let bilangan1input = prompt("Masukkah bilangan pertama: ")
bilangan1 = Number(bilangan1input)


// Minta pengguna memilih operasi (penjumlahan, pengurangan, perkalian, pembagian).
let operasibilangan = prompt("Masukkan sistem operasi: /n ( + - * /)")


// Minta pengguna memasukkan bilangan kedua
let bilangan2input = prompt("Masukkan bilangan kedua: ")
bilangan2 = Number(bilangan2input);

// Gunakan struktur kontrol seperti if atau switch untuk menentukan operasi yang harus dilakukan.
// Lakukan perhitungan sesuai dengan operasi yang dipilih (misalnya, jika pengguna memilih penjumlahan, maka hasil = bilangan1 + bilangan2).
if (operasibilangan === "+") {
    hasil = bilangan1 + bilangan2;
} else if (operasibilangan === "-") {
    hasil = bilangan1 - bilangan2;
} else if (operasibilangan === "*") {
    hasil = bilangan1 * bilangan2;
} else {
    hasil = bilangan1 / bilangan2;
}

alert(hasil);