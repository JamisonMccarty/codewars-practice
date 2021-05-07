function addLength(str) {
    //start-here
      
      let lengthArray = str.split(' ')
      
      let newerArray = [];
      
      let newArray = lengthArray.forEach(item => {
         newerArray.push(item+ ' ' + item.length)
      })
      return newerArray
      console.log(newerArray)
    }