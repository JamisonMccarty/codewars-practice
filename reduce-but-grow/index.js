function grow(x){
 
    // define reducer function (this could be inline if i wanted)
    function multiply(a, b) {
      return a * b;}
   
    // reduce with our reducer function defined above
    const growAnswer = x.reduce(
      multiply, 1
    )
    
    // return answer
    return growAnswer
  }