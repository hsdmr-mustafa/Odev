let a = 0; 
let b = 1; 
let toplam;
let esitdegerliT = 0;

for(i=0; i<10000000;i++){ 
    if(toplam>=4000000) { break; }
        toplam = a + b; 
        if(toplam%2==0){
            esitdegerliT += toplam;
    }
    a = b;
    b = toplam;
}
console.log(esitdegerliT);

