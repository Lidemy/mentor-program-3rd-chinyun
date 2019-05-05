// 解法 1
// function add(a, b) {
//   const first = a - 0;
//   const second = b - 0;
//   if (a.length > 0 && a.length <= 4 && b.length > 0 && b.length <= 4) {
//     return first + second;
//   }
// }

// 解法 2
function add(a, b) {
  let test = 0;
  for (let i = 0; i < a.length; i += 1) {
    test += a[i] * (10 ** i);
  }
  for (let i = 0; i < b.length; i += 1) {
    test += b[i] * (10 ** i);
  }
  return test;
}

module.exports = add;
