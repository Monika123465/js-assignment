let number=41
let factor=0
for(let i=0;i<=number;i++){
    if(number%i==0){
        factor++
    }
}
if(factor==2){
    console.log(`${number} is prime`)
}else{
    console.log('not prime')
}