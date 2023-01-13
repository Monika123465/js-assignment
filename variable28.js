let n=3
let bag=""
for(let i=0;i<=n;i++){
    for(let k=0;k<i;k++){
        bag+="*"
        
    }
    bag += "\n";
}
console.log(bag)

let num=3
let string=""
for(let i=0;i<num;i++){
    for(let k=0;k<num;k++){
        string+="*"
        
    }
    string += "\n";
}
console.log(string)


let star=3
let stararr=''
for(let i=0;i<=star;i++){
    for(let k=0;k<=n-1;k++){
        stararr+=""
    }
    for(let j=0;j<2*i-1;j++){
        stararr+="*"
    }
    stararr+="\n"
}

console.log(stararr)
