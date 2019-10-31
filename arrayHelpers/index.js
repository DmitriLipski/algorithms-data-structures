Array.prototype.square = function() {
  return this.map((item) => item * item)
};

Array.prototype.cube = function() {
    return this.map((item) => item * item * item)
};

Array.prototype.sum = function() {
    return this.reduce((sum, item) => sum + item, 0)
};

Array.prototype.average = function() {
    return (this.reduce((sum, item) => sum + item, 0)) / this.length
};

Array.prototype.even = function() {
    return this.filter((item) => item % 2 === 0)
};

Array.prototype.odd = function() {
    return this.filter((item) => item % 2 === 1)
};

const initArray = [1, 2, 3, 4, 5];

const resultArr = initArray.odd();

console.log("result =>", resultArr);
