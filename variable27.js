

for(let i=0;i<=100;i++){
    let notprime=false
    for(let k=2;k<=i;k++){
        if(i%k===0&&k!==i){
            notprime=true
        }
    }

if(notprime==false){
    console.log(i)
}
}
