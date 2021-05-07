function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    
    // filter out any non-true items 
    const filteredItems = arrayOfSheep.filter((item) => {
      return item == true ;
    })
    
    // return the length of the array which will be all the trues
    return filteredItems.length
  }