function authorizeGenerator() {
  const encounteredCodes = [];
  let maxCode = 0;

  return function authorize(code) {
    encounteredCodes.push(code);

    if (encounteredCodes.includes(code)) return false;

    if (!(code >= 0 && Math.floor(code) === +code)) return false;

    if (code > maxCode) {
      maxCode = code;
    }

    if (code > maxCode * 10 && !encounteredCodes.length) return false;

    return true;
  };
}


const authorize = authorizeGenerator();
console.log(authorize(0) === false);
console.log(authorize(1) === true);
console.log(authorize(1) === false);
console.log(authorize(10) === true);
console.log(authorize(100) === true);
console.log(authorize(11) === true);
console.log(authorize(99) === true);
console.log(authorize(100) === false);
console.log(authorize(5000) === false);
console.log(authorize(99.5) === false);