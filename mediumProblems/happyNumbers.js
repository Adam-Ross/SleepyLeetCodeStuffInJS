// Find happy numbers

const happy = (num) => {
    num = num.toString();
    let ans = 0
    while(ans !== 1) {
        ans = squareNumber(num)
    }
    return true
}

const squareNumber = (num) => {
    let ans = 0;
    for(let i = 0; i < num.length; i++) {
        ans = ans + num[i]**2
    }
    return ans
}



const input = 19
console.log(squareNumber('100'))


