function digPow(n, p){
    // ...
    let digits = n.toString().split('')
    console.log(digits)
    let sum = 0
    for (let i = 0; i<digits.length; i++){
      let pow = Math.pow(digits[i], p+i)
      //add the digit^i to a running sum total
      sum += pow
      console.log(sum)
    }
    //conditional to check if the quotient of sum/n is a whole number
    if((sum/n)%1 === 0){
      console.log(sum)
      return sum/n
  
    } else {
      return -1
  
    }
  }