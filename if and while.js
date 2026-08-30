let angkot = 1;
let bukaKedai = true;
let cekKelayakanAngkot = false;

let user = prompt('Masukkan nama anda: ');
alert('Selamat Datang Tuan Muda '+ user);

bukaKedai = confirm('Apakah tuan muda ingin membuka bisnis angkot milik tuan?');

if(bukaKedai){
    alert('Baiklah, tuan. Bisnis sudah di jalankan.');

    cekKelayakanAngkot = confirm('Angkot-angkot memerlukan pengecekan tambahan. Apa tuan ingin mengecek semua kelayakan angkot?');
    while(!cekKelayakanAngkot) {
        alert('Maaf, tuan. Sebelum beroperasi, angkot harus memenuhi standar untuk kenyamanan customer.');
        cekKelayakanAngkot = confirm('Apa anda akan melakukan pengecekan?')
    }
    alert('Proses pengecekan akan dilakukan...');

    while(angkot <= 10) {
        alert('Angkot No. ' + angkot +' beroperasi dengan baik.');
        angkot++;
    }

} else {
    alert('Baiklah,tuan. Bisnis tidak akan dijalankan. Semoga hari anda menyenangkan');
}







