function printFactor(n) {
  let answer = '';
  for (let i = 0; i < n + 1; i += 1) {
    if (n % i === 0) {
      answer += `${i} + \n`;
    }
  }
  return answer;
}

printFactor(10);
