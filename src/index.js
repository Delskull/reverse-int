module.exports = function reverse (n) {
    const arrayOfStrings = Array.from(String(n))
    // .reverse().join('')
  let filter = arrayOfStrings.filter((item)=> item >= 0)
  if ((filter[filter.length - 1]) === '0'){
   filter.pop()
   return filter.reverse().join('')
  }
    // for( i = 0 ; i < arrayOfStrings.length; i++){

    // }
  return filter.reverse().join('')
  }
