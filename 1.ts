function setupArray(arr:number[], n:number) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
let arr1=[1,2,3,4,5,6,7,8,9]
console.log(setupArray(arr1,2))