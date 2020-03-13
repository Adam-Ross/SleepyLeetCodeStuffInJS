// Find all duplicates

const findAllDups = (arr) => {
    const dups = []
    const compare = []
    for(let num of arr) {
        if(!compare.includes(num)) {
            compare.push(num)
        } else {
            dups.push(num)
        }
    }
    return dups
}

const arr = [4,3,2,7,8,2,3,1]
console.log(findAllDups(arr))