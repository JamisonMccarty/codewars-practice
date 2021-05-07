function multipleOfIndex(array) {
    // good luck
    
    const indexMultiple = array.filter((item, i) => {
      
      return item/i%1 == 0;
      
    })
  
    return indexMultiple
  }