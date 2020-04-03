// Map the dna sequence

// const dna = (str) => {
//     const res = []
//     const scene = {}
//     let count = 0
//     for(let i = 0; i + 9 < str.length; i++) {
//         let sequence = str.slice(i, i+10)
//         scene[sequence] = scene[sequence] + 1 || 1

//         if(scene[sequence] === 2) {
//             res.push(sequence)
//         }
//     }

//     console.log(str.length)
//     return res
// }

const dna = (str) => {
    const res = []
    const compare = []
    const final = []

    for(let i = 0; i + 9 < str.length; i++) {
        let sequence = str.slice(i, i+10)
        if(!compare.includes(sequence)) {
            compare.push(sequence)
        } else {
            res.push(sequence)
        }
    }

    const set = new Set(res)
    set.forEach(num => {
        final.push(num)
    })
    return final
}

const dnaSequence = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTTAAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
console.log(dna(dnaSequence))