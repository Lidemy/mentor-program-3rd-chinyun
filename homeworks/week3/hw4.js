function isPalindromes(str) {
  if (str.length < 100) {
    const arr = [];
    let test = '';
    for (let i = 0; i < str.length; i += 1) {
      arr.push(str[i]);
    }
    arr.reverse();
    for (let i = 0; i < arr.length; i += 1) {
      test += arr[i];
    }
    if (str === test) return true;
    return false;
  }
  return str;
}

module.exports = isPalindromes;
