//FUNCTION JUMLAH DUA KUBUS
function jumlahDuaKubus(a,b) {

    //NYARI VOLUME KUBUS MASING2
    kubusSatu = a * a * a;
    kubusDua = b * b * b;

    //PENJUMLAHAN DUA KUBUS
    let totalKubus = kubusSatu + kubusDua;
    return totalKubus

}

let panjangRusuk = jumlahDuaKubus(5, 3);

console.log(panjangRusuk);


//ARROW FUNCTION
const hargaDiskon = (hargaAwal, persenDiskon) => {
    
    let hargaAkhir = hargaAwal - (hargaAwal * (persenDiskon / 100));
    return hargaAkhir

}

let nanyaDiskon = hargaDiskon(
    Number(prompt(`HARGA AWAL: `),), 
    Number(prompt(`PERSEN DISKON: `))
);

alert(`HARGA DISKONNYA ADALAH ${nanyaDiskon}`)



