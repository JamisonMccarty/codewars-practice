function spinWords(string){
    //TODO Have fun :)
    
    var array = string.split(" ")
    
    
    function reverseOrNot(i){
      if (i.length >=5){
        let word =  i.split("").reverse().join("")  
        return word
      } else {
        return i
        }
      } 
      let final = array.map(reverseOrNot).join(" ")
          
      return final;
    
  
    }