// Three sum, man...

const threeSum = () => {
    // It's that sliding window bullshit...

    let i = 0;

    const sets = []
    while(i <= arr.length - 2) {
        if(arr[i] + arr[i + 1] + arr[i + 2] === 0) {
            sets.push([arr[i], arr[i+1], arr[i+2]])
        }
        i++
    }
    return sets
}


const arr = [-1, 0, 1, 2, 0, -2]
console.log(threeSum(arr))