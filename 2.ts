function checkMax(arr1:number[], arr2:number[], arr3:number[], arr4:number[]) {
    let sum1 = arr1.reduce((a, b) => a + b, 0)
    let sum2 = arr2.reduce((a, b) => a + b, 0)
    let sum3 = arr3.reduce((a, b) => a + b, 0)
    let sum4 = arr4.reduce((a, b) => a + b, 0)
    let maxSum = Math.max(sum1, sum2, sum3, sum4)
    if (maxSum === sum1) return arr1
    if (maxSum === sum2) return arr2
    if (maxSum === sum3) return arr3
    if (maxSum === sum4) return arr4
}

let arr1: number[] = [1,2,3,4]
let arr2: number[] = [2,3,4,5]
let arr3: number[] = [3,4,5,6]
let arr4: number[] = [4,5,6,7]

console.log(checkMax(arr1,arr2,arr3,arr4))

