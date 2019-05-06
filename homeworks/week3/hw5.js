function add(a, b) {
  const strA = a.split('').reverse();
  const strB = b.split('').reverse();
  const answer = [];
  const length = a.length >= b.length ? a.length : b.length;
  if (a.length >= b.length) {
    for (let i = b.length; i < a.length; i += 1) {
      strB.push('0');
    }
  } else if (a.length < b.length) {
    for (let i = a.length; i < b.length; i += 1) {
      strA.push('0');
    }
  }
  let sum = 0;
  for (let i = 0; i < length; i += 1) {
    sum += parseInt(strA[i], 10) + parseInt(strB[i], 10);
    if (i === length - 1 && sum >= 10) {
      let str = '';
      str += sum;
      str.split('');
      for (let j = str.length - 1; j >= 0; j -= 1) {
        answer.push(str[j]);
      }
    } else if (i < length - 1 && sum >= 10) {
      sum -= 10;
      answer.push(`${sum}`);
      sum = 1;
    } else {
      answer.push(`${sum}`);
      sum = 0;
    }
  }
  return answer.reverse().join('');
}

module.exports = add;
