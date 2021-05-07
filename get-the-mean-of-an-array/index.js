function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    
    // Find total of all grades divide by number of grades and round down
    const grade = Math.floor( marks.reduce(function (sum, value) {
          return sum + value;
      }, 0) / marks.length)
    
    return grade
  }