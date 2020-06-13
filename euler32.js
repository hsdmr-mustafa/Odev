kullanılan = [];
var toplam = 0;
for( a=2; a<100;a++){
    var len = String(a).length;
    for( b=10000/Math.pow(10, len);String(a).length+String(b).length+String(a*b).length<=9;b++){
        var num = String(a)+String(b)+String(a*b);
        if(pandigit(num)) { 
            if(!kullanılan[a*b]){
                toplam+=a*b
                console.trace(a+' x '+b+' = '+a*b); 
                kullanılan[a*b] = 1;
            }
        }
    }        
}
console.trace("Toplam: "+toplam);
function pandigit(x) {
    var y = x.split('');
    y.sort();
    return y.join('')=="123456789"
}
    