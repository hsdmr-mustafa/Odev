var ms = Date.now();

var key,cube,n = 123
var hash={}
while (true) {
    n++
    cube=n**3
    key=(''+cube).split('').sort().join('')
    if (!hash[key]) hash[key]=[]
    hash[key].push(n)
    if (hash[key].length==5) {
	console.log(key,hash[key],hash[key][0]+'**3 =',hash[key][0]**3);
	break
    }
}


console.log(Date.now()-ms+' ms') 