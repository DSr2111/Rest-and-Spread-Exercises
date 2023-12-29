//old ES5 code

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//my attempt

//const filterOutOdds = (...nums) => (...nums).filter(num => num % 2 === 0)

//solution - needed to remove parenth after first arrow

const filterOutOdds = (...args) => args.filter((v) => v % 2 === 0);

//
