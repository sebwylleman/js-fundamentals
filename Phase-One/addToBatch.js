const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  } else {
    const newBatch = array.concat(number);
    return newBatch;
  }
};

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([], 8));
