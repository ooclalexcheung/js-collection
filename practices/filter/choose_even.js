'use strict';

function choose_even(collection) {
  let result = filter(collection,isEven);
  return result
  //implement here

}

function filter(collection, fn){
  const result = []
  for(let i= 0;i< collection.length;i++){
    if(fn(collection[i]))
      result.push(collection[i])
  }
  return result
}

function isEven(element){
  return (element%2===0)
}
module.exports = choose_even;
