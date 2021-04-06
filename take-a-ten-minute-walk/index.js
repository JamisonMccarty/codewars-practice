function isValidWalk(walk) {
    //insert brilliant code here
    
    // number of n's has to == s's and number of e's == w's
    const n = walk.filter((el) => el == 'n')
    const s = walk.filter((el) => el == 's')
    const e = walk.filter((el) => el == 'e')
    const w = walk.filter((el) => el == 'w')
    
    if( walk.length == 10 && n.length == s.length && e.length == w.length){
      return true
    } else {
      return false
    }
  }