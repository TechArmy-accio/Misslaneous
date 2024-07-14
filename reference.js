

// let a = 10 

// let b = a  // value copy

// a = 20



// console.log(a)  // 10 => 20
// console.log(b)  // 10


// let a1 = [10,20,30]
// let a2 = a1

// a1[0] = 100

// console.log(a1) // [10,20,30]
// console.log(a2) // [10,20,30]


// let a1 = [10,20,30]
// // a2 = a1

// // a2 = a1
// let a2 = [] 

// for(let i = 0; i<a1.length; i++){
//     a2[i] = a1[i]
// }

// a1[0] = 100

// console.log(a1) // [100,20,30]
// console.log(a2) // [10,20,30]


// deep copy, shallow copy


// let arr = [10,20,[30,40],50,[60,70,80],90]

// brr = arr 

// arr[0] = 10 
// arr[1] = 20
// arr[2] = [30,40]
// arr[3] = 50
// arr[4] = [60,70,80]
// arr[5] = 90

// let t = arr[2] // [30,40]
// console.log(t[0]) 
// console.log(arr[2][0])



// let arr = [10,20,[30,40],50,[60,70,80],90]

// let brr = []


// for(let i = 0; i<=arr.length-1; i++){
//    brr[i] = arr[i]
//    // brr[0] = 10 
//     // brr[1] = 20
//     // brr[2] = [30,40]
//     // brr[3] = 50
// }



// // arr[0] = 100
// // arr[2][0] = 300
// console.log(arr)
// console.log(brr)



// let arr = [10,20,[30,40],50,[60,70,80],90]

// let brr = []


// console.log(arr, typeof arr)

// console.log(Array.isArray(arr))


// for(let i = 0; i<=arr.length-1; i++){
//     // console.log(arr[i] , typeof arr[i])
   
//     if(typeof arr[i] == "number"){
//         brr.push(arr[i])
//     }

//     else if(typeof(arr[i]) == "object"){
//         // arr[i] = [30,40]
//         let crr = []
//         for(let x of arr[i]){ // 30,40
//              crr.push(x)
//             brr.push(x)
//         }
//         crr =[30,40]
//         brr.push(crr)

//     }

// }

// console.log(brr) 


// 17.2


// let arr = [10,20,[30,40],50,[60,[70,75],80],90]


// let brr = structuredClone(arr)

// arr[4][1][0] = 700000   // [60,[70,75],80 => [70,75]


// console.log(arr)
// console.log(brr)