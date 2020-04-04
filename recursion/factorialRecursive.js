// Write factorial recursivly

const factorial = (num) => {
    let answer = 1
    if(num === 2) {
        return 2
    }
    for(let i = 2; i <= num; i++) {
        answer = answer * i
    }

    return answer
}


const factorialRec = (num) => {
    if(typeof(num) !== 'number') {
        return 'Argument entered was not typeof NUMBER'
    }
    if(Math.sign(num) === -1) {
        return -1
    }
    if(num === 1) {
        return 1
    }
    if(num === 2) {
        return 2
    }
    return num * factorialRec(num-1)
}


console.log(factorialRec('9')) 

