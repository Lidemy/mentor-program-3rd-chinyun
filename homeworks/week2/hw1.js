function printStars(n) {
  let answer = '';
  if (n >= 1 || n <= 30) {
    for (let i = 0; i < n; i += 1) {
      answer += '*\n';
    }
    console.log(answer);
  }
}

printStars(5);
