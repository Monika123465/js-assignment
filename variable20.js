let shoppingCart=['Milk','Coffee','Tea','Honey']

let flag=false
for(let i=0;i<shoppingCart.length;i++){
    if(shoppingCart[i]=='meat'){
        flag=true
    }else{
        flag=false
    }
}
if(flag==false){
    console.log(shoppingCart.unshift("Meat"))
}else{
    console.log('already added')
}


console.log(shoppingCart)

//2
let item=false
for(let i=0;i<shoppingCart.length;i++){
    if(shoppingCart[i]=='Sugar'){
        item=true
    }else{
        item=false
    }
}
if(item==false){
    console.log(shoppingCart.push("Sugar"))
}else{
    console.log('already added')
}

console.log(shoppingCart)

//3

let shoppingbag=['Milk','Coffee','Tea','Honey']
let remove=shoppingbag.pop()
console.log(remove)
console.log(shoppingbag)

//4
shoppingCart.splice(3,0,"GreenTea",'coffee')


console.log(shoppingCart)