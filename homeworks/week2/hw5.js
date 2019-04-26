function join(arr, concatStr) {
  let answer = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      answer += arr[i];
    } else {
      answer += arr[i] + concatStr;
    }
  }
  return answer;
}

function repeat(str, times) {
  let answer = '';
  for (let i = 0; i < times; i += 1) {
    answer += str;
  }
  return answer;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('a', 5));
