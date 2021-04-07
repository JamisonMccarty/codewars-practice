//My Solution to codewars challenge
function toCamelCase(str){
    if(str.length>0){
      let arrSplit = str.split(/[_-]/)
      let firstWord = arrSplit[0];
      for (let i = 1; i< arrSplit.length; i++){
        const capitalized = arrSplit[i].charAt(0).toUpperCase() + arrSplit[i].slice(1)
        
        firstWord += capitalized
        
        console.log(firstWord)
      }
      return firstWord
    } else {
      return ''
    }
  }