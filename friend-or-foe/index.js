//My Solution for Codewars challenge "Friend or Foe"
function friend(friends){
    //code here
    const result =  friends.filter((friend) => friend.length == 4)
    
    return result
    console.log(result)
  }