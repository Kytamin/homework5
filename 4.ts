function check(number:number):boolean{
    let arr:number[]=[]
    for (let i = 0; i < number; i++) {
        if(number%i===0){
            arr.push(i)
        }
    }
       if(arr.reduce((a,b)=>a+b)===number){
           return true
       }
       return  false
}


console.log(check(7))