// Recursion - need a base case, recursive case, and 2 returns

let count = 0
const recursiveFunction = () => {
    if(count > 3) {
        return 'Got it!'
    }

    count++
    return recursiveFunction()
}



console.log(recursiveFunction())