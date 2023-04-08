function Reverse(string: string):string {
    let newString:string[] = string.split('')
   let a=newString.reverse()
   return a.join('')
}
console.log(Reverse("Howtoreverse"))