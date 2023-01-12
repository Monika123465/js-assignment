function printNoOfdays(N){
if(N==1||N==1||N==3||N==5||N==7||N==8||N==10||N==12){
    console.log('31 days')
}else if(N == 4 || N == 6
    || N == 9 || N == 11) {
console.log("30 Days.");
}else if (N == 2) {
    console.log("28/29 Days.");
}else{
    console.log('invalid month')
}

}

let month=2
printNoOfdays(month)



const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
};

console.log(getDays(2023,9))