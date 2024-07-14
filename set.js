// Set: 


// let arr = [10,20,30,40,50,10,20,30,40,50]


// let s = new Set()  


// console.log(s,typeof s)




// s.add(10)
// s.add(20)
// s.add(30)
// // s.add(10)

// console.log(s)


// console.log(s.has(100))

// s.delete(10)


// console.log(s)


// for(let t of s){
//     console.log(t)
// }


// let arr = [10,20,10,20,10,30,10,20]


// let s = new Set()



// for(let t of arr){
//     s.add(t)
// }

// console.log(s) // {10,20,30}

// let arr1 = [...s]

// // let arr1 = []
// // for(let t of s){
// //     arr1.push(t)
// // }


// console.log(arr1) // [10,20,30]


// let arr = [10,20,10,20,10,30,10,20]

// let s = new Set(arr) // {10,20,30}


// console.log([...s])


let str = "madmamdmamdmamd"


let s = new Set(str)  // {m,a,d}

// let s1 = ""
// for(let t of s){
//     s1 += t
// }

console.log([...s].join("")) // mad