'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(a => a %3===0)
  //implement here
}

module.exports = choose_multiples_of_three;
