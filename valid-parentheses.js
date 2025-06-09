// --------------- Valid Parentheses ----------------

// Ochilgan qavslar stack (to‘plam) ga qo‘yiladi. Yopilgan qavs kelganda, stackning oxirgi elementiga qaraymiz:
// Agar mos bo‘lsa → o‘chirib tashlaymiz.
// Aks holda → noto‘g‘ri.
function isValid(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

// Bu usulda stackga kutilyotgan yopuvchi qavs joylanadi. Yopuvchi kelganda, u bilan solishtiramiz.
function isValidTwo(str) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];

  for (const c of str) {
    if (pairs[c]) {
      stack.push(pairs[c]); // kutilayotgan yopuvchini qoshamiz
    } else {
      if (stack.pop() !== c) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidTwo("()[]{}"));
console.log(isValidTwo("([)]"));
console.log(isValidTwo("{[]}"));
