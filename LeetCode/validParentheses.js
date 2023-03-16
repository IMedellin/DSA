const isValid = (s) => {
  const stack = [];
  const parens = "(){}[]"
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potParens = open + closed;


    if (parens.includes(potParens)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}


var isValid1 = function (s) {
  if (s[0].match(/[)\]})]/g)) {
    return false
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let last = stack[stack.length - 1];
    if (s[i].match(/[([{]/g)) {
      stack.push(s[i])
    } else if ((last + s[i]).match(/(\[\])|({})|(\(\))/g)) {
      stack.pop();
    } else {
      return false
    }
  };
  return stack.length === 0
}


console.log(isValid("(((())))"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("([{{}}])"));//true
console.log(isValid("((())]"))//false
console.log(isValid("(])"))//false