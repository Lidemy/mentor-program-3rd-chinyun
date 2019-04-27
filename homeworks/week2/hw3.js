function reverse(str) {
  let answer = '';
  for (let i = str.length; i > 0; i -= 1) {
    answer += str[i - 1];
  }
  return answer;
}

reverse('hello');
