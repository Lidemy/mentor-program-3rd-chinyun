function reverse(str) {
  const arr = str.split('');
  let answer = '';
  for (let i = str.length; i > 0; i -= 1) {
    answer += arr[i - 1];
  }
  return answer;
}

reverse('hello');
