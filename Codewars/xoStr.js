function XO(str) {
  const lowercasedStr = str.toLowerCase();
  const xoObjCount = {
    "x": 0,
    "o": 0
  }

  for (let i = 0; i < lowercasedStr.length; i++) {
    let current = lowercasedStr[i];
    if (current === "x") {
      xoObjCount.x = xoObjCount.x + 1;
    } else if (current === "o") {
      xoObjCount.o = xoObjCount.o + 1;
    }
  }

  console.log(xoObjCount)
  return xoObjCount.x === xoObjCount.o || xoObjCount.o === xoObjCount.x ? true : false;
}
// console.log(XO("ooxx"));
// console.log(XO("xooxx"));
// console.log(XO("ooxXm"));
// console.log(XO("zzoo"));
// console.log(XO("zpzpzpp"));



function XO2(str) {
  let x = str.match(/x/gi); //returns Array containing all "x";
  let o = str.match(/o/gi); //returns Array containing all "o";

  return (x && x.length) === (o && o.length); //compare the "x" array and its length with the "o" array and its length
}

console.log(XO2("ooxx"));
console.log(XO2("xooxx"));
console.log(XO2("ooxXm"));
console.log(XO2("zzoo"));
console.log(XO2("zpzpzpp"));