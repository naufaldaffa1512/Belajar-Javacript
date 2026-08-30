let hasil = '';

//SEGITIGA NORMAL//
for(let e = 0; e < 5; e++) {
    for(let t = 0; t <= 5 - e; t++) {
        hasil += ' ';
    }
    for(let r = 0; r <= (e * 2 ); r++) {
        hasil += '#';
    }
    hasil += '\n';
}

//KOTAK//
for(let a = 0; a < 5; a++) {
    for(let d = 0; d <= 1; d++) {
        hasil += ' ';
    }
    for( let s = 0; s < 9; s++) {
        if(a >= 2 && s >= 3 && s <=5) {
            hasil += ' ';
        }else {
            hasil += '#';
        }
    }
    hasil += '\n'
}

console.log(hasil);