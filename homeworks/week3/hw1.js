function stars(n) {
  const answer = [];
  let str = '';
  if (n >= 1 && n <= 30) {
    for (let i = 1; i < n + 1; i += 1) {
      str += '*';
      answer.push(str);
    }
    return answer;
  }
  return 'n should be >=1, <= 30';
}

module.exports = stars;
