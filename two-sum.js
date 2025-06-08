// #1. Oddiy beginner-friendly usuli lekn kamchiligi O(n) vaqt muommosi
const twoSum = (array, goal) => {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};

console.log(twoSum([1, 2, 3, 4], 4));

// Bu pastdagi 2 object va map bilan qilingan usul bryute force usulidan afzalligi vaqt muommosi yoq sikl faqat 1 marta aylanadi
// kamchiligi beginner friendly emas bu asosan katta massivlar uchun yaxshi
// #2. Hashmap object bilan
const twoSumWithObj = (nums, target) => {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i];
    }

    seen[nums[i]] = i;
  }
};

console.log(twoSumWithObj([1, 2, 3, 4], 4));

// #3. Map bilan
const twoSumWithMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};

console.log(twoSumWithMap([1, 2, 3, 4], 4));

// #4. Two pointer usuli bu usul juda tez ishlaydi ammo kamchiligi faqat tartiblangan masssivlarda ishlaydi
const twoSumSorted = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSumSorted([1, 2, 3, 4], 4));
