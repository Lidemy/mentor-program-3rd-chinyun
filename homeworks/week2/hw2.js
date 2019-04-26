function capitalize(str) {
  const reg = new RegExp('[A-Za-z]');
  const first = str.charAt(0);
  let answer = '';
  if (reg.test(first)) {
    answer = first.toUpperCase() + str.slice(1);
  } else {
    answer = str;
  }
  return answer;
}

console.log(capitalize('hello'));
