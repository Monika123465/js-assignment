let countries=['India','Japan','America','Nepal']

let flag=false
for(let i=0;i<countries.length;i++){
    if(countries[i]=='Ethiopia'){
        flag=true
    }else{
        flag=false
    }
}
if(flag==false){
    console.log(countries.unshift("Ethiopia"))
}else{
    console.log('Ethiopia')
}
console.log(countries)