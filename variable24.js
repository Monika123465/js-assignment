let even=[]
let odd=[]
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(even.push(i))
    }else{
        console.log(odd.push(i))
    }
}
console.log(odd,even)