let nama = ['Sadi', 'Azam', 'Miftah', 'Nabil', 'Rafi'];

console.log(nama.join(", ")); //output: Sadi, Azam, Miftah, Nabil, Rafi

console.log(nama.length); //output: 5

console.log(nama.slice(1, 3).join(", ")); //output: Azam, Miftah

nama.push('Yusup'); //masukkin Yusup ke array urutan paling akhir

console.log(nama.join(', ')); //output: Sadi, Azam, Miftah, Nabil, Rafi, Yusup

nama.pop(); //hapus data paling akhir(Yusup)

nama.unshift('Japar'); //masukkin Japar ke array urutan paling awal

console.log(nama.join(', ')); //output: Japar, Sadi, Azam, Miftah, Nabil, Rafi

nama.splice(1, 1, 'Repan').join(', '); //ngganti data index ke 1 jadi Repan

console.log(nama.join(', ')); //output: Japar, Repan, Sadi, Azam, Miftah, Nabil, Rafi
console.log(nama.length); //output: 6(jumlah data dalam array)













