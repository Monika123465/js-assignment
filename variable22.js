const ages=[19,22,19,24,20,25,26,24,25,24]

let agesort=ages.sort()        //1
//console.log(agesort)
let max=-Infinity
let min=Infinity
for(let i=0;i<agesort.length;i++){
    if(agesort[i]>max){
        max=agesort[i]
    }else if(agesort[i]<min){
        min=agesort[i]
    }
}

console.log(max,min)

//2
let median;
if(agesort.length%2!==0){
    let middleindex=Math.floor(agesort.length/2)
    median=agesort[middleindex]
}else{
    let middleindex=Math.floor(agesort.length/2)
median=(agesort[middleindex]+agesort[middleindex-1])/2
}

console.log(median)

//3
let sum=0
for(let i=0;i<agesort.length;i++){
    sum+=agesort[i]

}
let average=sum/agesort.length
console.log(average)

//4

console.log(max-min)

//5
let maxrange=Math.abs(max-average)
console.log(maxrange)
let minrange=Math.abs(min-average)
console.log(minrange)