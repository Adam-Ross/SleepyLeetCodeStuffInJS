// Write fibonacci recursivly

const fib = (num) => {
    let ans = 1
    for(let i = 2; i <= num; i++) {
        ans = ans + i
    }
    return ans
}

const fibRec = (num) => {
    if(num < 2) {
        return num
    }
    return fibRec(num -1) + fibRec(num -2)
}

console.log(fibRec(8))