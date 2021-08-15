function recursiveCount(num = 0) {
  // type your code here
  if(num > 9){
    return 'done'
  }

  console.log(num)
  recursiveCount(num + 1)

}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
  // until num reaches 10
  // call the function again with num + 1
  // then print num

// And a written explanation of your solution
  // first we had the break point so the function won't continue running if num is more than 9
  // then we run our function recursively, increasing the passed-in number by one
  // and we log our number to the console
  // so the function is called but paused for 0 up through 9
  // and when it reaches 9 it goes back down the stack and console logs in descending order
