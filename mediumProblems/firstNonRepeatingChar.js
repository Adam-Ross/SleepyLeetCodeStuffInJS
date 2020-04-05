// First non repeating char in o(n)

const nonRepeating = (str) => {
    if(str === '') {
        return -1
    }
    const obj = {}

    for(let elem of str) {
        obj[elem] = obj[elem] + 1 || 1
    }

    for(let elem of str) {
        if(obj[elem] === 1) {
            return elem
        }
    }
    return -1
}




const str = ''
console.log(nonRepeating(str))

