var isHappy = function(n) {
    var gecmis=[];
    function test (gecmis, sayi) { 
        for(i=0; i<gecmis.length;i++){
            if(sayi==gecmis[i]){return true;}
        }
        gecmis.push(sayi); 
        return false;
    }    
    var sayi=n;
    while(!test (gecmis, sayi)){
        var ds=sayi.toString(); 
        var miktr=0;
        for( i=0;i<ds.length;i++){
            miktr=miktr+parseInt(ds[i]) *parseInt(ds[i]);
        }
        if(sayi=-1){return true;} 
        sayi=miktr;
    }
    return false;
}
    