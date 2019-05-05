function alphaSwap(str) {
  const regUpperCase = new RegExp('[A-Z]');
  let answer = '';
  for (let i = 0; i < str.length; i += 1) {
    if (regUpperCase.test(str[i])) {
      answer += str[i].toLowerCase();
    } else {
      answer += str[i].toUpperCase();
    }
  }
  return answer;
}

module.exports = alphaSwap;
