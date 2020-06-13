function ilkucgn(n) {
    let miktr = 0;
     for(i = 1; i*i <= n; i++) { 
         if(n % i === 0) { 
             if(n/i === i) {
                miktr+=1;
            } else {
                miktr+=2;
            }
        }
    }
    return miktr;
}
(function main() {
    let miktr = 1;
    let toplam = 0;
    while(ilkucgn(toplam) < 500) {
        toplam+=miktr;
        miktr++;
    }
    console.log(toplam) 
}());
        