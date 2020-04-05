// Write fibonacci recursivly

const fib = (num) => {
    const arr = [0, 1]
    for(let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[num]
}

const fibRec = (num) => {
    if(num < 2) {
        return num
    }
    return fibRec(num -1) + fibRec(num -2)
}
console.log(fib(8))
console.log(fibRec(8))