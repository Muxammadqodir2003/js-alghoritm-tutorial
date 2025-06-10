// Time comlexity O(n log n)
// space complexity O(n)
function checkDublicate(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return true;
    }
  }

  return false;
}

console.log(checkDublicate([1, 32, 3, 4, 1, 5]));

const checkDublicateArr = (arr) => {
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) {
      return true;
    }
    set.add(item);
  }

  return false;
};

console.log(checkDublicateArr([1, 2, 3, 4, 1]));

const checkDubWithSet = (arr) => {
  const set = new Set(arr);
  return set.size < arr.length;
};
console.log(checkDubWithSet([1, 2, 3, 4, 1]));
